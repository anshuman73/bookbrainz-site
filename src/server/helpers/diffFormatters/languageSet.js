/*
 * Copyright (C) 2015-2016  Ben Ockmore
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.	See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

'use strict';

const set = require('./set');

function formatNewLanguageSet(change) {
	function transformer(rhs) {
		return rhs.languages.map((language) => language.name);
	}

	return set.formatNewSet(
		change, 'Languages', 'languages', transformer
	);
}

function formatLanguageAddOrDelete(change) {
	return set.formatItemAddOrDelete(
		change, `Language ${change.index}`, (side) => side && [side.name]
	);
}

function formatLanguageModified(change) {
	return set.formatItemModified(
		change, `Language ${change.path[2]}`, ['name']
	);
}

function formatLanguageSet(change) {
	return set.format(
		change, 'languageSet', 'languages',
		formatNewLanguageSet,
		formatLanguageAddOrDelete,
		formatLanguageModified
	);
}
module.exports.format = formatLanguageSet;

function languageSetChanged(change) {
	return set.changed(change, 'languageSet', 'languages');
}
module.exports.changed = languageSetChanged;
