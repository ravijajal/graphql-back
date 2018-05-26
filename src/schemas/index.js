import Schema from './schemas';
import Queries from './queries';
import Mutations from './mutations';
import Types from './types';

const typeDefs = [
    Schema, Queries, Mutations,
    ...Types
]
export default typeDefs;