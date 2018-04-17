// Generated from ./rules/RULANG.g4 by ANTLR 4.5.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by RULANGParser.
function RULANGListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

RULANGListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
RULANGListener.prototype.constructor = RULANGListener;

// Enter a parse tree produced by RULANGParser#goal.
RULANGListener.prototype.enterGoal = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#goal.
RULANGListener.prototype.exitGoal = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#uriStatement.
RULANGListener.prototype.enterUriStatement = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#uriStatement.
RULANGListener.prototype.exitUriStatement = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#versionUriStatement.
RULANGListener.prototype.enterVersionUriStatement = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#versionUriStatement.
RULANGListener.prototype.exitVersionUriStatement = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#includeStatement.
RULANGListener.prototype.enterIncludeStatement = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#includeStatement.
RULANGListener.prototype.exitIncludeStatement = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#sectionBlock.
RULANGListener.prototype.enterSectionBlock = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#sectionBlock.
RULANGListener.prototype.exitSectionBlock = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#section.
RULANGListener.prototype.enterSection = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#section.
RULANGListener.prototype.exitSection = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#schemaSection.
RULANGListener.prototype.enterSchemaSection = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#schemaSection.
RULANGListener.prototype.exitSchemaSection = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#metaGraphSection.
RULANGListener.prototype.enterMetaGraphSection = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#metaGraphSection.
RULANGListener.prototype.exitMetaGraphSection = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#primaryKnowledgeRulesSection.
RULANGListener.prototype.enterPrimaryKnowledgeRulesSection = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#primaryKnowledgeRulesSection.
RULANGListener.prototype.exitPrimaryKnowledgeRulesSection = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#querySection.
RULANGListener.prototype.enterQuerySection = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#querySection.
RULANGListener.prototype.exitQuerySection = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#queryRule.
RULANGListener.prototype.enterQueryRule = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#queryRule.
RULANGListener.prototype.exitQueryRule = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#rscConfigurationSection.
RULANGListener.prototype.enterRscConfigurationSection = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#rscConfigurationSection.
RULANGListener.prototype.exitRscConfigurationSection = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#knowledgeBaseSection.
RULANGListener.prototype.enterKnowledgeBaseSection = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#knowledgeBaseSection.
RULANGListener.prototype.exitKnowledgeBaseSection = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#ruleDef.
RULANGListener.prototype.enterRuleDef = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#ruleDef.
RULANGListener.prototype.exitRuleDef = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#ruleHeader.
RULANGListener.prototype.enterRuleHeader = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#ruleHeader.
RULANGListener.prototype.exitRuleHeader = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#predicates.
RULANGListener.prototype.enterPredicates = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#predicates.
RULANGListener.prototype.exitPredicates = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#inferences.
RULANGListener.prototype.enterInferences = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#inferences.
RULANGListener.prototype.exitInferences = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#tripleLiteral.
RULANGListener.prototype.enterTripleLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#tripleLiteral.
RULANGListener.prototype.exitTripleLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#tripleAssertion.
RULANGListener.prototype.enterTripleAssertion = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#tripleAssertion.
RULANGListener.prototype.exitTripleAssertion = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#resourceDecl.
RULANGListener.prototype.enterResourceDecl = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#resourceDecl.
RULANGListener.prototype.exitResourceDecl = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#configProp.
RULANGListener.prototype.enterConfigProp = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#configProp.
RULANGListener.prototype.exitConfigProp = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#filter.
RULANGListener.prototype.enterFilter = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#filter.
RULANGListener.prototype.exitFilter = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#atomicExpression.
RULANGListener.prototype.enterAtomicExpression = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#atomicExpression.
RULANGListener.prototype.exitAtomicExpression = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#prefixedIdExpression.
RULANGListener.prototype.enterPrefixedIdExpression = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#prefixedIdExpression.
RULANGListener.prototype.exitPrefixedIdExpression = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#identifierExpression.
RULANGListener.prototype.enterIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#identifierExpression.
RULANGListener.prototype.exitIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#queryIdentifierExpression.
RULANGListener.prototype.enterQueryIdentifierExpression = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#queryIdentifierExpression.
RULANGListener.prototype.exitQueryIdentifierExpression = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#unaryOpExpression.
RULANGListener.prototype.enterUnaryOpExpression = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#unaryOpExpression.
RULANGListener.prototype.exitUnaryOpExpression = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#parenExpression.
RULANGListener.prototype.enterParenExpression = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#parenExpression.
RULANGListener.prototype.exitParenExpression = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#binaryOpExpression.
RULANGListener.prototype.enterBinaryOpExpression = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#binaryOpExpression.
RULANGListener.prototype.exitBinaryOpExpression = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#atom.
RULANGListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#atom.
RULANGListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#resourceLiteral.
RULANGListener.prototype.enterResourceLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#resourceLiteral.
RULANGListener.prototype.exitResourceLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#stringLiteral.
RULANGListener.prototype.enterStringLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#stringLiteral.
RULANGListener.prototype.exitStringLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#booleanLiteral.
RULANGListener.prototype.enterBooleanLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#booleanLiteral.
RULANGListener.prototype.exitBooleanLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#nullLiteral.
RULANGListener.prototype.enterNullLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#nullLiteral.
RULANGListener.prototype.exitNullLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#numberLiteral.
RULANGListener.prototype.enterNumberLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#numberLiteral.
RULANGListener.prototype.exitNumberLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#floatLiteral.
RULANGListener.prototype.enterFloatLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#floatLiteral.
RULANGListener.prototype.exitFloatLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#intLiteral.
RULANGListener.prototype.enterIntLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#intLiteral.
RULANGListener.prototype.exitIntLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#calendarLiteral.
RULANGListener.prototype.enterCalendarLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#calendarLiteral.
RULANGListener.prototype.exitCalendarLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#durationLiteral.
RULANGListener.prototype.enterDurationLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#durationLiteral.
RULANGListener.prototype.exitDurationLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#timeLiteral.
RULANGListener.prototype.enterTimeLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#timeLiteral.
RULANGListener.prototype.exitTimeLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#dateLiteral.
RULANGListener.prototype.enterDateLiteral = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#dateLiteral.
RULANGListener.prototype.exitDateLiteral = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#queryId.
RULANGListener.prototype.enterQueryId = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#queryId.
RULANGListener.prototype.exitQueryId = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#prefixedID.
RULANGListener.prototype.enterPrefixedID = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#prefixedID.
RULANGListener.prototype.exitPrefixedID = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#unaryOperator.
RULANGListener.prototype.enterUnaryOperator = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#unaryOperator.
RULANGListener.prototype.exitUnaryOperator = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#binaryOperator.
RULANGListener.prototype.enterBinaryOperator = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#binaryOperator.
RULANGListener.prototype.exitBinaryOperator = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#boolOperator.
RULANGListener.prototype.enterBoolOperator = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#boolOperator.
RULANGListener.prototype.exitBoolOperator = function(ctx) {
};


// Enter a parse tree produced by RULANGParser#numOperator.
RULANGListener.prototype.enterNumOperator = function(ctx) {
};

// Exit a parse tree produced by RULANGParser#numOperator.
RULANGListener.prototype.exitNumOperator = function(ctx) {
};



module.exports.RULANGListener = RULANGListener;