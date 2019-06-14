import { ApolloClientOptions } from './interfaces/apollo-client-options.interface';
import { DynamicModule } from '@nestjs/common';

declare class ApolloClientModule {
    static forRoot(options: ApolloClientOptions): DynamicModule;
}
