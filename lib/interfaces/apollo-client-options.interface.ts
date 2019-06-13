import {PresetConfig} from 'apollo-boost';

export interface ApolloClientOptions extends PresetConfig {
    fetch: GlobalFetch['fetch'];
}
