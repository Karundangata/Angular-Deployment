import { AuthInterface } from "./Reducers/auth.reducer";
import { BlogInterface } from "./Reducers/blog.reducer";
import { CounterInterface } from "./Reducers/counter.reducer";
import { DummyRI } from "./Reducers/dummy.reducer";


export interface AppState{
dummy:DummyRI
counter:CounterInterface
auth:AuthInterface
blogs:BlogInterface
}