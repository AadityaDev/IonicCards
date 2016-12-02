import {MyRefersErrors} from "./MyRefersErrors";
export interface MyRefersResponse {
  errors: Array<MyRefersErrors>;
  result: any;
  hasMore: boolean;
  totalRecordCount: number;

}
