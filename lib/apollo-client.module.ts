import { DynamicModule, Module } from '@nestjs/common';

import {APOLLO_CLIENT_OPTIONS} from './constants/apollo-client-options.constant';
import {ApolloClientOptions} from './interfaces/apollo-client-options.interface';
import {ApolloClientService} from './apollo-client.service';

@Module({})
export class ApolloClientModule {
    static forRoot(options: ApolloClientOptions): DynamicModule {
        const ApolloOptionsProvider = {
            name: APOLLO_CLIENT_OPTIONS,
            provide: APOLLO_CLIENT_OPTIONS,
            useValue: options,
        };

        return {
            module: ApolloClientModule,
            providers: [ApolloOptionsProvider, ApolloClientService],
            exports: [ApolloClientService]
        };
    }
}
