import { Request, Response } from "express";
import User from "../models/user.model";

//Đăng nhập: [POST] /api/user/login
export const login = async (req: Request, res: Response) => {
  const username: String = req.body.username;
  const password: String = req.body.password;

  const user = await User.findOne({
    where: {
      userName: username
    }
  })
  if (!user) {
    res.json({
      message: "Tài khoản không tồn tại"
    });
    return;
  }
  if (password !== (user as any).pass) {
    res.json({
      message: "Thông tin mật khẩu không chính xác"
    });
    return;
  }
  const id: Number = (user as any).id;
  const token: String = (user as any).token;
  const admin: Boolean = (user as any).isadmin;
  res.json([
    {
      message: "Đăng nhập thành công",
      id: id,
      token: token,
      admin: admin
    }
  ]);
};

//Đăng ký: [POST] /api/user/register
export const register = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const token = req.body.token;

  const existUsername = await User.findOne({
    where: {
      userName: username
    }
  });

  if (existUsername) {
    res.json({
      message: "Tài khoản đã có người đăng ký"
    });
    return;
  }

  const infoUser = {
    userName: username,
    pass: password,
    token: token
  }

  await User.create(infoUser);

  res.json({ message: "Tạo tài khoản thành công" });
}

//lấy danh sách người dùng: [GET] /api/user/getuser
export const getUser = async (req: Request, res: Response) => {
  const user = await User.findAll()
  res.json(user);
};

//sửa quyền admin: [POST]: /api/user/editUser/:id
export const editUser = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const user = await User.findOne({
      where: {
        id: id,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    // Đảo ngược trạng thái admin
    const newAdminStatus = !(user as any).isadmin;
    (user as any).isadmin = newAdminStatus;

    await user.save(); // Lưu thay đổi vào DB

    res.json({
      code: 200,
      message: `Cập nhật quyền admin thành công`,
      isadmin: (user as any).isadmin,
    });
  } catch (error) {
    console.error("Error editing user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//xóa người dùng: [DELETE] /api/user/deluser/:id
export const delUser = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  await User.destroy({
    where: {
      id: id
    }
  })
  res.json({ code: 200 });
}
//Đổi mật khẩu: [POST] /api/user/changepass
export const change = async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;
  const newpass = req.body.newpass;

  const user = await User.findOne({
    where: {
      userName: username,
      pass: password
    }
  })
  console.log(newpass);
  if(!user){
    res.json({
      code: 400,
      message: "Username or Password is incorrect!"
    })
  }
  await user.update({
    pass: newpass
  })
  res.json({
    code: 200,
    message: "Change Password Successfull!"
  })
}