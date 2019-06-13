import {Inject, Injectable} from '@nestjs/common';
import ApolloClient from 'apollo-boost';

import {APOLLO_CLIENT_OPTIONS} from './constants/apollo-client-options.constant';
import {ApolloClientOptions} from './interfaces/apollo-client-options.interface';

@Injectable()
export class ApolloClientService<TCache = any> extends ApolloClient<TCache> {
    constructor(@Inject(APOLLO_CLIENT_OPTIONS) private readonly apolloClientOptions: ApolloClientOptions) {
        super(apolloClientOptions);
    }
}
