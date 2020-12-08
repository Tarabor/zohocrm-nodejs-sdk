const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class LeadConverter{

	overwrite;
	notifyLeadOwner;
	notifyNewEntityOwner;
	accounts;
	contacts;
	assignTo;
	deals;
	keyModified = new Map();
	/**
	 * The method to get the overwrite
	 * @returns {Boolean} A Boolean
	 */
	getOverwrite()	{
		return this.overwrite;

	}

	/**
	 * The method to set the value to overwrite
	 * @param {Boolean} overwrite A Boolean
	 */
	setOverwrite(overwrite)	{
		if((overwrite != null) && (!(Object.prototype.toString.call(overwrite) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: overwrite EXPECTED TYPE: Boolean", null, null);
		}
		this.overwrite = overwrite;
		this.keyModified.set("overwrite", 1);

	}

	/**
	 * The method to get the notifyLeadOwner
	 * @returns {Boolean} A Boolean
	 */
	getNotifyLeadOwner()	{
		return this.notifyLeadOwner;

	}

	/**
	 * The method to set the value to notifyLeadOwner
	 * @param {Boolean} notifyLeadOwner A Boolean
	 */
	setNotifyLeadOwner(notifyLeadOwner)	{
		if((notifyLeadOwner != null) && (!(Object.prototype.toString.call(notifyLeadOwner) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyLeadOwner EXPECTED TYPE: Boolean", null, null);
		}
		this.notifyLeadOwner = notifyLeadOwner;
		this.keyModified.set("notify_lead_owner", 1);

	}

	/**
	 * The method to get the notifyNewEntityOwner
	 * @returns {Boolean} A Boolean
	 */
	getNotifyNewEntityOwner()	{
		return this.notifyNewEntityOwner;

	}

	/**
	 * The method to set the value to notifyNewEntityOwner
	 * @param {Boolean} notifyNewEntityOwner A Boolean
	 */
	setNotifyNewEntityOwner(notifyNewEntityOwner)	{
		if((notifyNewEntityOwner != null) && (!(Object.prototype.toString.call(notifyNewEntityOwner) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: notifyNewEntityOwner EXPECTED TYPE: Boolean", null, null);
		}
		this.notifyNewEntityOwner = notifyNewEntityOwner;
		this.keyModified.set("notify_new_entity_owner", 1);

	}

	/**
	 * The method to get the accounts
	 * @returns {String} A String
	 */
	getAccounts()	{
		return this.accounts;

	}

	/**
	 * The method to set the value to accounts
	 * @param {String} accounts A String
	 */
	setAccounts(accounts)	{
		if((accounts != null) && (!(Object.prototype.toString.call(accounts) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: accounts EXPECTED TYPE: String", null, null);
		}
		this.accounts = accounts;
		this.keyModified.set("Accounts", 1);

	}

	/**
	 * The method to get the contacts
	 * @returns {String} A String
	 */
	getContacts()	{
		return this.contacts;

	}

	/**
	 * The method to set the value to contacts
	 * @param {String} contacts A String
	 */
	setContacts(contacts)	{
		if((contacts != null) && (!(Object.prototype.toString.call(contacts) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: contacts EXPECTED TYPE: String", null, null);
		}
		this.contacts = contacts;
		this.keyModified.set("Contacts", 1);

	}

	/**
	 * The method to get the assignTo
	 * @returns {String} A String
	 */
	getAssignTo()	{
		return this.assignTo;

	}

	/**
	 * The method to set the value to assignTo
	 * @param {String} assignTo A String
	 */
	setAssignTo(assignTo)	{
		if((assignTo != null) && (!(Object.prototype.toString.call(assignTo) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: assignTo EXPECTED TYPE: String", null, null);
		}
		this.assignTo = assignTo;
		this.keyModified.set("assign_to", 1);

	}

	/**
	 * The method to get the deals
	 * @returns {Record} An instance of Record
	 */
	getDeals()	{
		return this.deals;

	}

	/**
	 * The method to set the value to deals
	 * @param {Record} deals An instance of Record
	 */
	setDeals(deals)	{
		const Record = require("./record").MasterModel;
		if((deals != null) && (!(deals instanceof Record)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: deals EXPECTED TYPE: Record", null, null);
		}
		this.deals = deals;
		this.keyModified.set("Deals", 1);

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
	MasterModel : LeadConverter,
	LeadConverter : LeadConverter
}
