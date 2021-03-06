/**
 * Вспомогательные методы для работы с DOM
 */
var htmlparser = require('htmlparser2');
var DomHandler = require('domhandler');
var DomUtils = require('domutils');

module.exports = {
	/**
	 * Парсит указанный XML/HTML документ в DOM
	 * @param  {String} code Содержимое документа, которое нужно распарсить
	 * @return {Object}      DOM-дерево документа
	 */
	parse: function(code) {
		var handler = new DomHandler();
		var parser = new htmlparser.Parser(handler);
		parser.write(code);
		parser.done();
		return handler.dom;
	},

	/**
	 * Делает строковое представление указанного DOM-дерева
	 * @param  {Object} dom
	 * @return {String}
	 */
	stringify: function(dom) {
		var opt = {xmlMode: true};
		return dom.map(function(node) {
			return DomUtils.getOuterHTML(node, opt);
		}).join('');
	}
};