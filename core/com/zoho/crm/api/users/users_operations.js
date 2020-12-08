const Header = require("../../../../../../routes/header").MasterModel;
const HeaderMap = require("../../../../../../routes/header_map").MasterModel;
const Param = require("../../../../../../routes/param").MasterModel;
const ParameterMap = require("../../../../../../routes/parameter_map").MasterModel;
const APIResponse = require("../../../../../../routes/controllers/api_response").MasterModel;
const CommonAPIHandler = require("../../../../../../routes/middlewares/common_api_handler").MasterModel;
const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class UsersOperations{
	/**
	 * The method to get users
	 * @param {ParameterMap} paramInstance An instance of ParameterMap
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUsers(paramInstance=null, headerInstance=null)	{
		if((paramInstance != null) && (!(paramInstance instanceof ParameterMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: paramInstance EXPECTED TYPE: ParameterMap", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/users");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		handlerInstance.param = paramInstance;
		handlerInstance.header = headerInstance;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to create user
	 * @param {RequestWrapper} request An instance of RequestWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async createUser(request)	{
		const RequestWrapper = require("./request_wrapper").MasterModel;
		if((request != null) && (!(request instanceof RequestWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: RequestWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/users");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_POST;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_CREATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to update users
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateUsers(request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/users");
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_PUT;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		handlerInstance.mandatoryChecker = true;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to get user
	 * @param {BigInt} id A BigInt
	 * @param {HeaderMap} headerInstance An instance of HeaderMap
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async getUser(id, headerInstance=null)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((headerInstance != null) && (!(headerInstance instanceof HeaderMap)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: headerInstance EXPECTED TYPE: HeaderMap", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/users/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_GET;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_READ;
		handlerInstance.header = headerInstance;
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall(ResponseHandler, "application/json");

	}

	/**
	 * The method to update user
	 * @param {BigInt} id A BigInt
	 * @param {BodyWrapper} request An instance of BodyWrapper
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async updateUser(id, request)	{
		const BodyWrapper = require("./body_wrapper").MasterModel;
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		if((request != null) && (!(request instanceof BodyWrapper)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: request EXPECTED TYPE: BodyWrapper", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/users/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_PUT;
		handlerInstance.categoryMethod = Constants.REQUEST_CATEGORY_UPDATE;
		handlerInstance.contentType = "application/json";
		handlerInstance.request = request;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

	/**
	 * The method to delete user
	 * @param {BigInt} id A BigInt
	 * @returns {APIResponse} An instance of APIResponse
	 * @throws {SDKException}
	 */
	async deleteUser(id)	{
		if((!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		var handlerInstance = new CommonAPIHandler();
		var apiPath = '';
		apiPath = apiPath.concat("/crm/v2/users/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.apiPath = apiPath;
		handlerInstance.httpMethod = Constants.REQUEST_METHOD_DELETE;
		handlerInstance.categoryMethod = Constants.REQUEST_METHOD_DELETE;
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall(ActionHandler, "application/json");

	}

}
class GetUsersParam{

	static TYPE = new Param("type", "com.zoho.crm.api.Users.GetUsersParam");
	static PAGE = new Param("page", "com.zoho.crm.api.Users.GetUsersParam");
	static PER_PAGE = new Param("per_page", "com.zoho.crm.api.Users.GetUsersParam");
}

class GetUsersHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUsersHeader");
}

class GetUserHeader{

	static IF_MODIFIED_SINCE = new Header("If-Modified-Since", "com.zoho.crm.api.Users.GetUserHeader");
}

module.exports = {
	MasterModel : UsersOperations,
	UsersOperations : UsersOperations,
	GetUsersHeader : GetUsersHeader,
	GetUsersParam : GetUsersParam,
	GetUserHeader : GetUserHeader
}
