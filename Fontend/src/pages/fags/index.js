import { Collapse } from "antd";
import "./fags.scss";
const itemsone = [
  {
    key: "1-1",
    label: <div className="title">Điều kiện đăng ký tour như thế nào?</div>,
    children: <span className="desc">Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân còn hạn sử dụng đối với tour du lịch trong nước, và Hộ chiếu còn hạn trên 6 tháng đối với tour du lịch nước ngoài, ngoài ra đối với một số nước thì sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán quy định.</span>,
  },
  {
    key: "1-2",
    label: <div className="title">Cần phải đăng ký tour trước bao lâu? Hồ sơ cần phải chuẩn bị trước bao lâu?</div>,
    children: <span className="desc">Kính chào Quý khách, để đảm bảo có chỗ ngồi tốt và hành trình du lịch được chuẩn bị sẵn, Quý khách nên đăng ký ít nhất trước 1 tháng so với ngày khởi hành, riêng đối với các tour cần phải xin visa thì Quý khách phải chuẩn bị hồ sơ để xin visa theo yêu cầu cụ thể của từng nước đến.</span>,
  },
  {
    key: "1-3",
    label: <div className="title">Khách lớn tuổi đi tour cần điều kiện gì? Tôi đăng ký mua tour trực tiếp khách lớn tuổi mà không được?</div>,
    children: <span className="desc">Đối với khách nữ từ 55 tuổi trở lên và khách nam từ 60 trở lên: Du lịch ND Travel khuyến cáo nên có người thân dưới 55 tuổi (đầy đủ sức khỏe) đi cùng để có thể kịp thời hỗ trợ nếu có vấn đề xảy ra khi đi tour. Riêng khách từ 70 tuổi trở lên: Bắt buộc phải có người thân dưới 55 tuổi (đầy đủ sức khỏe) đi cùng và nộp kèm giấy khám sức khỏe, trong đó có xác nhận đủ sức khỏe để đi du lịch của bác sĩ + Giấy cam kết sức khỏe theo mẫu qui định của công ty.</span>,
  },
  {
    key: "1-4",
    label: <div className="title">Khách dưới 18 tuổi đăng ký tour thì cần điều kiện gì? Khi đăng ký có gặp khó khăn gì không?</div>,
    children: <span className="desc">Quý khách dưới 18 tuổi phải có Bố/Mẹ hoặc người nhà trên 18 tuổi đi cùng. Trường hợp quý khách dưới 18 tuổi đi cùng người thân thì Bố và Mẹ phải ủy quyền (có xác nhận của chính quyền địa phương) cho người thân.</span>,
  },
  {
    key: "1-5",
    label: <div className="title">Khách dưới 18 tuổi đăng ký tour thì cần điều kiện gì?</div>,
    children: <span className="desc">Với trường hợp thanh toán bằng tiền mặt hoặc cà thẻ ngân hàng, quý khách có thể thanh toán tại Trụ sở chính: 190 Pasteur, phường 06, quận 03, TPHCM hoặc bất kì Văn phòng nào của Vietravel. Hiện tại, Du Lịch Sky Tour đang có 04 văn phòng bán lẻ tại các quận thành phố Hà Nội và Hồ Chí Minh và các chi nhánh tại các tỉnh thành Việt Nam.</span>,
  }
];

const itemstwo = [
  {
    key: "2-1",
    label: <div className="title">Điểm tham quan ở nước ngoài có an toàn hay không?</div>,
    children: <span className="desc">Điểm tham quan tại nước ngoài trong các chương trình du lịch của Vietravel đều là những điểm nổi bật, thu hút nhiều khách tham quan trên Thế giới. Do vậy, Quý khách lưu ý cẩn thận tư trang cá nhân khi ở chỗ đông người, luôn đi chung với đoàn, không nên tự ý rời khỏi đoàn để đảm bảo an toàn cho bạn và tránh mất thêm thời gian cho đoàn</span>,
  },
  {
    key: "2-2",
    label: <div className="title">Giá tour đã bao gồm VAT chưa? Tôi muốn xuất hóa đơn được không?</div>,
    children: <span className="desc">Tất cả các tour đều có quy định rất rõ cho từng tour về thuế VAT, trường hợp khách có yêu cầu xuất hóa đơn, vui lòng cung cấp đầy đủ thông tin xuất hóa đơn ngay khi đăng ký tour và thanh toán hết. Hóa đơn sẽ được xuất sau khi kết thúc tour và được gửi về địa chỉ theo yêu cầu của quý khách hoặc lấy trực tiếp. Không nhận xuất hóa đơn sau khi tour khởi hành.</span>,
  },
  {
    key: "2-3",
    label: <div className="title">Tới công ty thanh toán bằng hình thức cà thẻ được không? Cà thẻ có mất phí cà thẻ không?</div>,
    children: <span className="desc">Quý khách có thể mang thẻ để thanh toán tại POS cà thẻ tại các văn phòng của Du Lịch Sky Tour, tuy nhiên chủ thẻ phải là người đến cà thẻ. Sky Tour hỗ trợ Quý khách hàng phí cà thẻ. Đối với các thẻ tín dụng nước ngoài hoặc thẻ tín dụng sử dụng ngoại tệ để thanh toán, phí cà thẻ Sky Tour sẽ hỗ trợ, tuy nhiên quý khách sẽ chịu chi phí chuyển đổi ngoại tệ sang tiền VNĐ khi thanh toán tùy thuộc từng ngân hàng, từng thời điểm.</span>,
  },
  {
    key: "2-4",
    label: <div className="title">Khách sạn có nằm ngay trung tâm không? Khách sạn có đủ tiêu chuẩn như đã báo không?</div>,
    children: <span className="desc">Kính chào Quý khách, Sky Tour đảm báo chất lượng dịch vụ của tour và khách sạn theo chuẩn. Vị trí và trang thiết bị của khách sạn tùy thuộc vào từng dòng tour và chương trình tour cụ thể như dòng tiêu chuẩn, cao cấp hay tiết kiệm sẽ khác nhau và được bố trí khách sạn nằm xa gần trung tâm hay nằm trên cung đường để tiện di chuyển tham quan.</span>,
  },
  {
    key: "2-5",
    label: <div className="title">Cách tìm và đặt tour online?</div>,
    children: <span className="desc">Bạn truy cập trang này skytour.mysapo.net để đọc hướng dẫn.</span>,
  }
];

function Fags() {
  return (
    <div className="container minheight-fags" style={{ marginTop: 30 }}>
      <h2 style={{ textAlign: "center", marginBottom: 5, fontSize:32, fontWeight: 700, color: "#212633" }}>Câu hỏi thường gặp?</h2>
      <div style={{ textAlign: "center", marginBottom: 20, fontSize: 16, fontWeight: 300, color: "#76809B" }}>Chúng tôi vinh hạnh vì đã có cơ hội đồng hành với hơn 10.000 khách hàng trên khắp thế giới</div>
      <div className="row" style={{ display: "flex", alignItems: "stretch"}}>
        <div className="col-md-6 col-12" style={{ display: "flex" }}>
          <Collapse accordion defaultActiveKey="1-1" items={itemsone} style={{ width: "100%" }}/>
        </div>
        <div className="col-md-6 col-12" style={{ display: "flex" }}>
          <Collapse accordion defaultActiveKey="2-1" items={itemstwo} style={{ width: "100%" }}/>
        </div>
      </div>
    </div>
  );
}
 export default Fags;