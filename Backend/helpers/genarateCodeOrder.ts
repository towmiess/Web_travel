export const generateOrderCode = (number: Number): String  => {
  const code = `ORDER${String(number).padStart(5,'0')}`;

  return code;
}

export const generateTourCode = (number: Number): String  => {
  const code = `TOUR${String(number).padStart(6,'0')}`;
  return code;
}