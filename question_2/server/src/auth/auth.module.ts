// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.SECRETKEY, // Use a real secret in production
      signOptions: { expiresIn: process.env.EXPIRESIN }, // Use a real expiration in production eg. '60s', '60m', '2h', '7d'
    }),
  ],
  providers: [AuthService, UserService, JwtStrategy, PrismaService],
  exports: [AuthService],
})
export class AuthModule {}
