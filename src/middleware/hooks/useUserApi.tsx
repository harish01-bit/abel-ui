import { useMutation, useQuery, useQueryClient } from "react-query";
import { reactQueryConfig } from "../../helpers/react-query.config";
import { UserApiService } from "../services/user-api.service";
import { mutationHelperFun } from "../../helpers/react-query-helper";

const service = new UserApiService();
