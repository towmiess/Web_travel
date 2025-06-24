export function generateToken() {
  const characters = 'ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuwxyz0123456789';
  const length = 10;
  let token = '';

  for(let i = 0; i < length; i++){
    token += characters.charAt(Math.floor(Math.random()*characters.length));
  }
  return token;
}