const Constants = require("../../../../../../utils/util/constants").MasterModel;
const SDKException = require("../exception/sdk_exception").MasterModel;

class Field{

	systemMandatory;
	webhook;
	private1;
	layouts;
	content;
	columnName;
	type;
	transitionSequence;
	personalityName;
	message;
	mandatory;
	criteria;
	relatedDetails;
	jsonType;
	crypt;
	fieldLabel;
	tooltip;
	createdSource;
	fieldReadOnly;
	displayLabel;
	readOnly;
	associationDetails;
	quickSequenceNumber;
	businesscardSupported;
	multiModuleLookup;
	currency;
	id;
	customField;
	lookup;
	visible;
	length;
	viewType;
	subform;
	apiName;
	unique;
	historyTracking;
	dataType;
	formula;
	decimalPlace;
	massUpdate;
	blueprintSupported;
	multiselectlookup;
	pickListValues;
	autoNumber;
	defaultValue;
	sectionId;
	validationRule;
	convertMapping;
	keyModified = new Map();
	/**
	 * The method to get the systemMandatory
	 * @returns {Boolean} A Boolean
	 */
	getSystemMandatory()	{
		return this.systemMandatory;

	}

	/**
	 * The method to set the value to systemMandatory
	 * @param {Boolean} systemMandatory A Boolean
	 */
	setSystemMandatory(systemMandatory)	{
		if((systemMandatory != null) && (!(Object.prototype.toString.call(systemMandatory) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: systemMandatory EXPECTED TYPE: Boolean", null, null);
		}
		this.systemMandatory = systemMandatory;
		this.keyModified.set("system_mandatory", 1);

	}

	/**
	 * The method to get the webhook
	 * @returns {Boolean} A Boolean
	 */
	getWebhook()	{
		return this.webhook;

	}

	/**
	 * The method to set the value to webhook
	 * @param {Boolean} webhook A Boolean
	 */
	setWebhook(webhook)	{
		if((webhook != null) && (!(Object.prototype.toString.call(webhook) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: webhook EXPECTED TYPE: Boolean", null, null);
		}
		this.webhook = webhook;
		this.keyModified.set("webhook", 1);

	}

	/**
	 * The method to get the private
	 * @returns {Private} An instance of Private
	 */
	getPrivate()	{
		return this.private1;

	}

	/**
	 * The method to set the value to private
	 * @param {Private} private1 An instance of Private
	 */
	setPrivate(private1)	{
		const Private = require("./private").MasterModel;
		if((private1 != null) && (!(private1 instanceof Private)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: private1 EXPECTED TYPE: Private", null, null);
		}
		this.private1 = private1;
		this.keyModified.set("private", 1);

	}

	/**
	 * The method to get the layouts
	 * @returns {Layout} An instance of Layout
	 */
	getLayouts()	{
		return this.layouts;

	}

	/**
	 * The method to set the value to layouts
	 * @param {Layout} layouts An instance of Layout
	 */
	setLayouts(layouts)	{
		const Layout = require("../layouts/layout").MasterModel;
		if((layouts != null) && (!(layouts instanceof Layout)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: layouts EXPECTED TYPE: Layout", null, null);
		}
		this.layouts = layouts;
		this.keyModified.set("layouts", 1);

	}

	/**
	 * The method to get the content
	 * @returns {String} A String
	 */
	getContent()	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param {String} content A String
	 */
	setContent(content)	{
		if((content != null) && (!(Object.prototype.toString.call(content) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: content EXPECTED TYPE: String", null, null);
		}
		this.content = content;
		this.keyModified.set("content", 1);

	}

	/**
	 * The method to get the columnName
	 * @returns {String} A String
	 */
	getColumnName()	{
		return this.columnName;

	}

	/**
	 * The method to set the value to columnName
	 * @param {String} columnName A String
	 */
	setColumnName(columnName)	{
		if((columnName != null) && (!(Object.prototype.toString.call(columnName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: columnName EXPECTED TYPE: String", null, null);
		}
		this.columnName = columnName;
		this.keyModified.set("column_name", 1);

	}

	/**
	 * The method to get the type
	 * @returns {String} A String
	 */
	getType()	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param {String} type A String
	 */
	setType(type)	{
		if((type != null) && (!(Object.prototype.toString.call(type) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: type EXPECTED TYPE: String", null, null);
		}
		this.type = type;
		this.keyModified.set("_type", 1);

	}

	/**
	 * The method to get the transitionSequence
	 * @returns {Integer} An Integer
	 */
	getTransitionSequence()	{
		return this.transitionSequence;

	}

	/**
	 * The method to set the value to transitionSequence
	 * @param {Integer} transitionSequence An Integer
	 */
	setTransitionSequence(transitionSequence)	{
		if((transitionSequence != null) && (!(Object.prototype.toString.call(transitionSequence) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: transitionSequence EXPECTED TYPE: Integer", null, null);
		}
		this.transitionSequence = transitionSequence;
		this.keyModified.set("transition_sequence", 1);

	}

	/**
	 * The method to get the personalityName
	 * @returns {String} A String
	 */
	getPersonalityName()	{
		return this.personalityName;

	}

	/**
	 * The method to set the value to personalityName
	 * @param {String} personalityName A String
	 */
	setPersonalityName(personalityName)	{
		if((personalityName != null) && (!(Object.prototype.toString.call(personalityName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: personalityName EXPECTED TYPE: String", null, null);
		}
		this.personalityName = personalityName;
		this.keyModified.set("personality_name", 1);

	}

	/**
	 * The method to get the message
	 * @returns {String} A String
	 */
	getMessage()	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param {String} message A String
	 */
	setMessage(message)	{
		if((message != null) && (!(Object.prototype.toString.call(message) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: message EXPECTED TYPE: String", null, null);
		}
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the mandatory
	 * @returns {Boolean} A Boolean
	 */
	getMandatory()	{
		return this.mandatory;

	}

	/**
	 * The method to set the value to mandatory
	 * @param {Boolean} mandatory A Boolean
	 */
	setMandatory(mandatory)	{
		if((mandatory != null) && (!(Object.prototype.toString.call(mandatory) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: mandatory EXPECTED TYPE: Boolean", null, null);
		}
		this.mandatory = mandatory;
		this.keyModified.set("mandatory", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns {Criteria} An instance of Criteria
	 */
	getCriteria()	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param {Criteria} criteria An instance of Criteria
	 */
	setCriteria(criteria)	{
		const Criteria = require("../custom_views/criteria").MasterModel;
		if((criteria != null) && (!(criteria instanceof Criteria)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: criteria EXPECTED TYPE: Criteria", null, null);
		}
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the relatedDetails
	 * @returns {RelatedDetails} An instance of RelatedDetails
	 */
	getRelatedDetails()	{
		return this.relatedDetails;

	}

	/**
	 * The method to set the value to relatedDetails
	 * @param {RelatedDetails} relatedDetails An instance of RelatedDetails
	 */
	setRelatedDetails(relatedDetails)	{
		const RelatedDetails = require("./related_details").MasterModel;
		if((relatedDetails != null) && (!(relatedDetails instanceof RelatedDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: relatedDetails EXPECTED TYPE: RelatedDetails", null, null);
		}
		this.relatedDetails = relatedDetails;
		this.keyModified.set("related_details", 1);

	}

	/**
	 * The method to get the jsonType
	 * @returns {String} A String
	 */
	getJsonType()	{
		return this.jsonType;

	}

	/**
	 * The method to set the value to jsonType
	 * @param {String} jsonType A String
	 */
	setJsonType(jsonType)	{
		if((jsonType != null) && (!(Object.prototype.toString.call(jsonType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: jsonType EXPECTED TYPE: String", null, null);
		}
		this.jsonType = jsonType;
		this.keyModified.set("json_type", 1);

	}

	/**
	 * The method to get the crypt
	 * @returns {Crypt} An instance of Crypt
	 */
	getCrypt()	{
		return this.crypt;

	}

	/**
	 * The method to set the value to crypt
	 * @param {Crypt} crypt An instance of Crypt
	 */
	setCrypt(crypt)	{
		const Crypt = require("./crypt").MasterModel;
		if((crypt != null) && (!(crypt instanceof Crypt)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: crypt EXPECTED TYPE: Crypt", null, null);
		}
		this.crypt = crypt;
		this.keyModified.set("crypt", 1);

	}

	/**
	 * The method to get the fieldLabel
	 * @returns {String} A String
	 */
	getFieldLabel()	{
		return this.fieldLabel;

	}

	/**
	 * The method to set the value to fieldLabel
	 * @param {String} fieldLabel A String
	 */
	setFieldLabel(fieldLabel)	{
		if((fieldLabel != null) && (!(Object.prototype.toString.call(fieldLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldLabel EXPECTED TYPE: String", null, null);
		}
		this.fieldLabel = fieldLabel;
		this.keyModified.set("field_label", 1);

	}

	/**
	 * The method to get the tooltip
	 * @returns {ToolTip} An instance of ToolTip
	 */
	getTooltip()	{
		return this.tooltip;

	}

	/**
	 * The method to set the value to tooltip
	 * @param {ToolTip} tooltip An instance of ToolTip
	 */
	setTooltip(tooltip)	{
		const ToolTip = require("./tool_tip").MasterModel;
		if((tooltip != null) && (!(tooltip instanceof ToolTip)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: tooltip EXPECTED TYPE: ToolTip", null, null);
		}
		this.tooltip = tooltip;
		this.keyModified.set("tooltip", 1);

	}

	/**
	 * The method to get the createdSource
	 * @returns {String} A String
	 */
	getCreatedSource()	{
		return this.createdSource;

	}

	/**
	 * The method to set the value to createdSource
	 * @param {String} createdSource A String
	 */
	setCreatedSource(createdSource)	{
		if((createdSource != null) && (!(Object.prototype.toString.call(createdSource) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: createdSource EXPECTED TYPE: String", null, null);
		}
		this.createdSource = createdSource;
		this.keyModified.set("created_source", 1);

	}

	/**
	 * The method to get the fieldReadOnly
	 * @returns {Boolean} A Boolean
	 */
	getFieldReadOnly()	{
		return this.fieldReadOnly;

	}

	/**
	 * The method to set the value to fieldReadOnly
	 * @param {Boolean} fieldReadOnly A Boolean
	 */
	setFieldReadOnly(fieldReadOnly)	{
		if((fieldReadOnly != null) && (!(Object.prototype.toString.call(fieldReadOnly) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: fieldReadOnly EXPECTED TYPE: Boolean", null, null);
		}
		this.fieldReadOnly = fieldReadOnly;
		this.keyModified.set("field_read_only", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns {String} A String
	 */
	getDisplayLabel()	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param {String} displayLabel A String
	 */
	setDisplayLabel(displayLabel)	{
		if((displayLabel != null) && (!(Object.prototype.toString.call(displayLabel) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: displayLabel EXPECTED TYPE: String", null, null);
		}
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the readOnly
	 * @returns {Boolean} A Boolean
	 */
	getReadOnly()	{
		return this.readOnly;

	}

	/**
	 * The method to set the value to readOnly
	 * @param {Boolean} readOnly A Boolean
	 */
	setReadOnly(readOnly)	{
		if((readOnly != null) && (!(Object.prototype.toString.call(readOnly) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: readOnly EXPECTED TYPE: Boolean", null, null);
		}
		this.readOnly = readOnly;
		this.keyModified.set("read_only", 1);

	}

	/**
	 * The method to get the associationDetails
	 * @returns {AssociationDetails} An instance of AssociationDetails
	 */
	getAssociationDetails()	{
		return this.associationDetails;

	}

	/**
	 * The method to set the value to associationDetails
	 * @param {AssociationDetails} associationDetails An instance of AssociationDetails
	 */
	setAssociationDetails(associationDetails)	{
		const AssociationDetails = require("./association_details").MasterModel;
		if((associationDetails != null) && (!(associationDetails instanceof AssociationDetails)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: associationDetails EXPECTED TYPE: AssociationDetails", null, null);
		}
		this.associationDetails = associationDetails;
		this.keyModified.set("association_details", 1);

	}

	/**
	 * The method to get the quickSequenceNumber
	 * @returns {Integer} An Integer
	 */
	getQuickSequenceNumber()	{
		return this.quickSequenceNumber;

	}

	/**
	 * The method to set the value to quickSequenceNumber
	 * @param {Integer} quickSequenceNumber An Integer
	 */
	setQuickSequenceNumber(quickSequenceNumber)	{
		if((quickSequenceNumber != null) && (!(Object.prototype.toString.call(quickSequenceNumber) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: quickSequenceNumber EXPECTED TYPE: Integer", null, null);
		}
		this.quickSequenceNumber = quickSequenceNumber;
		this.keyModified.set("quick_sequence_number", 1);

	}

	/**
	 * The method to get the businesscardSupported
	 * @returns {Boolean} A Boolean
	 */
	getBusinesscardSupported()	{
		return this.businesscardSupported;

	}

	/**
	 * The method to set the value to businesscardSupported
	 * @param {Boolean} businesscardSupported A Boolean
	 */
	setBusinesscardSupported(businesscardSupported)	{
		if((businesscardSupported != null) && (!(Object.prototype.toString.call(businesscardSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: businesscardSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.businesscardSupported = businesscardSupported;
		this.keyModified.set("businesscard_supported", 1);

	}

	/**
	 * The method to get the multiModuleLookup
	 * @returns {Map} A Map
	 */
	getMultiModuleLookup()	{
		return this.multiModuleLookup;

	}

	/**
	 * The method to set the value to multiModuleLookup
	 * @param {Map} multiModuleLookup A Map
	 */
	setMultiModuleLookup(multiModuleLookup)	{
		if((multiModuleLookup != null) && (!(Object.prototype.toString.call(multiModuleLookup) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiModuleLookup EXPECTED TYPE: Map", null, null);
		}
		this.multiModuleLookup = multiModuleLookup;
		this.keyModified.set("multi_module_lookup", 1);

	}

	/**
	 * The method to get the currency
	 * @returns {Currency} An instance of Currency
	 */
	getCurrency()	{
		return this.currency;

	}

	/**
	 * The method to set the value to currency
	 * @param {Currency} currency An instance of Currency
	 */
	setCurrency(currency)	{
		const Currency = require("./currency").MasterModel;
		if((currency != null) && (!(currency instanceof Currency)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: currency EXPECTED TYPE: Currency", null, null);
		}
		this.currency = currency;
		this.keyModified.set("currency", 1);

	}

	/**
	 * The method to get the id
	 * @returns {BigInt} A BigInt
	 */
	getId()	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param {BigInt} id A BigInt
	 */
	setId(id)	{
		if((id != null) && (!(Object.prototype.toString.call(id) == "[object BigInt]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: id EXPECTED TYPE: BigInt", null, null);
		}
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the customField
	 * @returns {Boolean} A Boolean
	 */
	getCustomField()	{
		return this.customField;

	}

	/**
	 * The method to set the value to customField
	 * @param {Boolean} customField A Boolean
	 */
	setCustomField(customField)	{
		if((customField != null) && (!(Object.prototype.toString.call(customField) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: customField EXPECTED TYPE: Boolean", null, null);
		}
		this.customField = customField;
		this.keyModified.set("custom_field", 1);

	}

	/**
	 * The method to get the lookup
	 * @returns {Module} An instance of Module
	 */
	getLookup()	{
		return this.lookup;

	}

	/**
	 * The method to set the value to lookup
	 * @param {Module} lookup An instance of Module
	 */
	setLookup(lookup)	{
		const Module = require("./module").MasterModel;
		if((lookup != null) && (!(lookup instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: lookup EXPECTED TYPE: Module", null, null);
		}
		this.lookup = lookup;
		this.keyModified.set("lookup", 1);

	}

	/**
	 * The method to get the visible
	 * @returns {Boolean} A Boolean
	 */
	getVisible()	{
		return this.visible;

	}

	/**
	 * The method to set the value to visible
	 * @param {Boolean} visible A Boolean
	 */
	setVisible(visible)	{
		if((visible != null) && (!(Object.prototype.toString.call(visible) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: visible EXPECTED TYPE: Boolean", null, null);
		}
		this.visible = visible;
		this.keyModified.set("visible", 1);

	}

	/**
	 * The method to get the length
	 * @returns {Integer} An Integer
	 */
	getLength()	{
		return this.length;

	}

	/**
	 * The method to set the value to length
	 * @param {Integer} length An Integer
	 */
	setLength(length)	{
		if((length != null) && (!(Object.prototype.toString.call(length) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: length EXPECTED TYPE: Integer", null, null);
		}
		this.length = length;
		this.keyModified.set("length", 1);

	}

	/**
	 * The method to get the viewType
	 * @returns {ViewType} An instance of ViewType
	 */
	getViewType()	{
		return this.viewType;

	}

	/**
	 * The method to set the value to viewType
	 * @param {ViewType} viewType An instance of ViewType
	 */
	setViewType(viewType)	{
		const ViewType = require("./view_type").MasterModel;
		if((viewType != null) && (!(viewType instanceof ViewType)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: viewType EXPECTED TYPE: ViewType", null, null);
		}
		this.viewType = viewType;
		this.keyModified.set("view_type", 1);

	}

	/**
	 * The method to get the subform
	 * @returns {Module} An instance of Module
	 */
	getSubform()	{
		return this.subform;

	}

	/**
	 * The method to set the value to subform
	 * @param {Module} subform An instance of Module
	 */
	setSubform(subform)	{
		const Module = require("./module").MasterModel;
		if((subform != null) && (!(subform instanceof Module)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: subform EXPECTED TYPE: Module", null, null);
		}
		this.subform = subform;
		this.keyModified.set("subform", 1);

	}

	/**
	 * The method to get the apiName
	 * @returns {String} A String
	 */
	getAPIName()	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param {String} apiName A String
	 */
	setAPIName(apiName)	{
		if((apiName != null) && (!(Object.prototype.toString.call(apiName) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: apiName EXPECTED TYPE: String", null, null);
		}
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the unique
	 * @returns {Unique} An instance of Unique
	 */
	getUnique()	{
		return this.unique;

	}

	/**
	 * The method to set the value to unique
	 * @param {Unique} unique An instance of Unique
	 */
	setUnique(unique)	{
		const Unique = require("./unique").MasterModel;
		if((unique != null) && (!(unique instanceof Unique)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: unique EXPECTED TYPE: Unique", null, null);
		}
		this.unique = unique;
		this.keyModified.set("unique", 1);

	}

	/**
	 * The method to get the historyTracking
	 * @returns {Boolean} A Boolean
	 */
	getHistoryTracking()	{
		return this.historyTracking;

	}

	/**
	 * The method to set the value to historyTracking
	 * @param {Boolean} historyTracking A Boolean
	 */
	setHistoryTracking(historyTracking)	{
		if((historyTracking != null) && (!(Object.prototype.toString.call(historyTracking) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: historyTracking EXPECTED TYPE: Boolean", null, null);
		}
		this.historyTracking = historyTracking;
		this.keyModified.set("history_tracking", 1);

	}

	/**
	 * The method to get the dataType
	 * @returns {String} A String
	 */
	getDataType()	{
		return this.dataType;

	}

	/**
	 * The method to set the value to dataType
	 * @param {String} dataType A String
	 */
	setDataType(dataType)	{
		if((dataType != null) && (!(Object.prototype.toString.call(dataType) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: dataType EXPECTED TYPE: String", null, null);
		}
		this.dataType = dataType;
		this.keyModified.set("data_type", 1);

	}

	/**
	 * The method to get the formula
	 * @returns {Formula} An instance of Formula
	 */
	getFormula()	{
		return this.formula;

	}

	/**
	 * The method to set the value to formula
	 * @param {Formula} formula An instance of Formula
	 */
	setFormula(formula)	{
		const Formula = require("./formula").MasterModel;
		if((formula != null) && (!(formula instanceof Formula)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: formula EXPECTED TYPE: Formula", null, null);
		}
		this.formula = formula;
		this.keyModified.set("formula", 1);

	}

	/**
	 * The method to get the decimalPlace
	 * @returns {Integer} An Integer
	 */
	getDecimalPlace()	{
		return this.decimalPlace;

	}

	/**
	 * The method to set the value to decimalPlace
	 * @param {Integer} decimalPlace An Integer
	 */
	setDecimalPlace(decimalPlace)	{
		if((decimalPlace != null) && (!(Object.prototype.toString.call(decimalPlace) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: decimalPlace EXPECTED TYPE: Integer", null, null);
		}
		this.decimalPlace = decimalPlace;
		this.keyModified.set("decimal_place", 1);

	}

	/**
	 * The method to get the massUpdate
	 * @returns {Boolean} A Boolean
	 */
	getMassUpdate()	{
		return this.massUpdate;

	}

	/**
	 * The method to set the value to massUpdate
	 * @param {Boolean} massUpdate A Boolean
	 */
	setMassUpdate(massUpdate)	{
		if((massUpdate != null) && (!(Object.prototype.toString.call(massUpdate) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: massUpdate EXPECTED TYPE: Boolean", null, null);
		}
		this.massUpdate = massUpdate;
		this.keyModified.set("mass_update", 1);

	}

	/**
	 * The method to get the blueprintSupported
	 * @returns {Boolean} A Boolean
	 */
	getBlueprintSupported()	{
		return this.blueprintSupported;

	}

	/**
	 * The method to set the value to blueprintSupported
	 * @param {Boolean} blueprintSupported A Boolean
	 */
	setBlueprintSupported(blueprintSupported)	{
		if((blueprintSupported != null) && (!(Object.prototype.toString.call(blueprintSupported) == "[object Boolean]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: blueprintSupported EXPECTED TYPE: Boolean", null, null);
		}
		this.blueprintSupported = blueprintSupported;
		this.keyModified.set("blueprint_supported", 1);

	}

	/**
	 * The method to get the multiselectlookup
	 * @returns {MultiSelectLookup} An instance of MultiSelectLookup
	 */
	getMultiselectlookup()	{
		return this.multiselectlookup;

	}

	/**
	 * The method to set the value to multiselectlookup
	 * @param {MultiSelectLookup} multiselectlookup An instance of MultiSelectLookup
	 */
	setMultiselectlookup(multiselectlookup)	{
		const MultiSelectLookup = require("./multi_select_lookup").MasterModel;
		if((multiselectlookup != null) && (!(multiselectlookup instanceof MultiSelectLookup)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: multiselectlookup EXPECTED TYPE: MultiSelectLookup", null, null);
		}
		this.multiselectlookup = multiselectlookup;
		this.keyModified.set("multiselectlookup", 1);

	}

	/**
	 * The method to get the pickListValues
	 * @returns {Array} An Array
	 */
	getPickListValues()	{
		return this.pickListValues;

	}

	/**
	 * The method to set the value to pickListValues
	 * @param {Array} pickListValues An Array
	 */
	setPickListValues(pickListValues)	{
		if((pickListValues != null) && (!(Object.prototype.toString.call(pickListValues) == "[object Array]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: pickListValues EXPECTED TYPE: Array", null, null);
		}
		this.pickListValues = pickListValues;
		this.keyModified.set("pick_list_values", 1);

	}

	/**
	 * The method to get the autoNumber
	 * @returns {AutoNumber} An instance of AutoNumber
	 */
	getAutoNumber()	{
		return this.autoNumber;

	}

	/**
	 * The method to set the value to autoNumber
	 * @param {AutoNumber} autoNumber An instance of AutoNumber
	 */
	setAutoNumber(autoNumber)	{
		const AutoNumber = require("./auto_number").MasterModel;
		if((autoNumber != null) && (!(autoNumber instanceof AutoNumber)))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: autoNumber EXPECTED TYPE: AutoNumber", null, null);
		}
		this.autoNumber = autoNumber;
		this.keyModified.set("auto_number", 1);

	}

	/**
	 * The method to get the defaultValue
	 * @returns {String} A String
	 */
	getDefaultValue()	{
		return this.defaultValue;

	}

	/**
	 * The method to set the value to defaultValue
	 * @param {String} defaultValue A String
	 */
	setDefaultValue(defaultValue)	{
		if((defaultValue != null) && (!(Object.prototype.toString.call(defaultValue) == "[object String]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: defaultValue EXPECTED TYPE: String", null, null);
		}
		this.defaultValue = defaultValue;
		this.keyModified.set("default_value", 1);

	}

	/**
	 * The method to get the sectionId
	 * @returns {Integer} An Integer
	 */
	getSectionId()	{
		return this.sectionId;

	}

	/**
	 * The method to set the value to sectionId
	 * @param {Integer} sectionId An Integer
	 */
	setSectionId(sectionId)	{
		if((sectionId != null) && (!(Object.prototype.toString.call(sectionId) == "[object Number]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: sectionId EXPECTED TYPE: Integer", null, null);
		}
		this.sectionId = sectionId;
		this.keyModified.set("section_id", 1);

	}

	/**
	 * The method to get the validationRule
	 * @returns {Map} A Map
	 */
	getValidationRule()	{
		return this.validationRule;

	}

	/**
	 * The method to set the value to validationRule
	 * @param {Map} validationRule A Map
	 */
	setValidationRule(validationRule)	{
		if((validationRule != null) && (!(Object.prototype.toString.call(validationRule) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: validationRule EXPECTED TYPE: Map", null, null);
		}
		this.validationRule = validationRule;
		this.keyModified.set("validation_rule", 1);

	}

	/**
	 * The method to get the convertMapping
	 * @returns {Map} A Map
	 */
	getConvertMapping()	{
		return this.convertMapping;

	}

	/**
	 * The method to set the value to convertMapping
	 * @param {Map} convertMapping A Map
	 */
	setConvertMapping(convertMapping)	{
		if((convertMapping != null) && (!(Object.prototype.toString.call(convertMapping) == "[object Map]")))	{
			throw new SDKException(Constants.DATA_TYPE_ERROR, "KEY: convertMapping EXPECTED TYPE: Map", null, null);
		}
		this.convertMapping = convertMapping;
		this.keyModified.set("convert_mapping", 1);

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
	MasterModel : Field,
	Field : Field
}
