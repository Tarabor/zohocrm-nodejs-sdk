const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class ViewType{

	view;
	edit;
	create;
	quickCreate;
	keyModified = new Map();
	/**
	 * The method to get the view
	 * @returns {Boolean} A Boolean
	 */
	getView()	{
		return this.view;

	}

	/**
	 * The method to set the value to view
	 * @param {Boolean} view A Boolean
	 */
	setView(view)	{
		if((view != null) && (!(Object.prototype.toString.call(view) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: view EXPECTED TYPE: Boolean", null, null);
		}
		this.view = view;
		this.keyModified.set("view", 1);

	}

	/**
	 * The method to get the edit
	 * @returns {Boolean} A Boolean
	 */
	getEdit()	{
		return this.edit;

	}

	/**
	 * The method to set the value to edit
	 * @param {Boolean} edit A Boolean
	 */
	setEdit(edit)	{
		if((edit != null) && (!(Object.prototype.toString.call(edit) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: edit EXPECTED TYPE: Boolean", null, null);
		}
		this.edit = edit;
		this.keyModified.set("edit", 1);

	}

	/**
	 * The method to get the create
	 * @returns {Boolean} A Boolean
	 */
	getCreate()	{
		return this.create;

	}

	/**
	 * The method to set the value to create
	 * @param {Boolean} create A Boolean
	 */
	setCreate(create)	{
		if((create != null) && (!(Object.prototype.toString.call(create) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: create EXPECTED TYPE: Boolean", null, null);
		}
		this.create = create;
		this.keyModified.set("create", 1);

	}

	/**
	 * The method to get the quickCreate
	 * @returns {Boolean} A Boolean
	 */
	getQuickCreate()	{
		return this.quickCreate;

	}

	/**
	 * The method to set the value to quickCreate
	 * @param {Boolean} quickCreate A Boolean
	 */
	setQuickCreate(quickCreate)	{
		if((quickCreate != null) && (!(Object.prototype.toString.call(quickCreate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickCreate EXPECTED TYPE: Boolean", null, null);
		}
		this.quickCreate = quickCreate;
		this.keyModified.set("quick_create", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param {String} key A String
	 * @returns {Integer} An Integer
	 */
	isKeyModified(key)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param {String} key A String
	 * @param {Integer} modification An Integer
	 */
	setKeyModified(key, modification)	{
		if((key != null) && (!(Object.prototype.toString.call(key) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: key EXPECTED TYPE: String", null, null);
		}
		if((modification != null) && (!(Object.prototype.toString.call(modification) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: modification EXPECTED TYPE: Integer", null, null);
		}
		this.keyModified.set(key, modification);

	}

}
module.exports = {
	MasterModel : ViewType,
	ViewType : ViewType
}
