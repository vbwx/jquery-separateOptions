// jQuery separateOptions plugin
// Copyright (C) 2013 Bernhard Waldbrunner
/*
 *	This program is free software: you can redistribute it and/or modify
 *	it under the terms of the GNU General Public License as published by
 *	the Free Software Foundation, either version 3 of the License, or
 *	(at your option) any later version.
 *
 *	This program is distributed in the hope that it will be useful,
 *	but WITHOUT ANY WARRANTY; without even the implied warranty of
 *	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *	GNU General Public License for more details.
 *
 *	You should have received a copy of the GNU General Public License
 *	along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function ($) {
$(function ()
{
	$('select').separateOptions();
});

$.fn.separateOptions = function () {
	return this.each(function () {
		var $el = $(this);
		var max = 0, opt = [];
		$el.find('option').each(function () {
			var $o = $(this);
			var text = $o.text();
			if (text == '--' || $o.attr('data-sep'))
				opt.push(this);
			var len = text.length -
					  text.replace(/[^lijftrI.:,!'"`|[\]]/g, "").length / 2;
			if (len > max)
				max = len;
		});
		if (opt.length == 0)
			return;
		var sep = "";
		for (var i = 0; i < Math.ceil(max); i++)
			sep += "&ndash;";
		$.each(opt, function () {
			$(this).html(sep).attr('data-sep', 1);
		});
	});
}
})(jQuery);
