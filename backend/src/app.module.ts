import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GithubService } from './github/services/github.service';
import { GithubController } from './github/controllers/github/github.controller';

@Module({
  imports: [],
  controllers: [AppController, GithubController],
  providers: [AppService, GithubService],
})
export class AppModule {}
