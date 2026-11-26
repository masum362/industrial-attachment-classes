import jwt from 'jsonwebtoken'
interface JwtPayload {
  userId: string;
  email: string;
}   


export const generateToken = (user: { id: string; email: string },key:string): string => {
  return jwt.sign(
    { userId: user.id, email: user.email } as JwtPayload,
    key,
    { expiresIn: '7d' }
  );
};