import { Global, Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { EnvConfigValidator } from '../common/config/env-config.validator';

@Global()
@Module({
  providers: [ConfigService, EnvConfigValidator],
  exports: [ConfigService, EnvConfigValidator],
})
export class ConfigModule {}
