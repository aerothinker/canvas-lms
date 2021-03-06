/*
 * Copyright (C) 2018 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import htmlEscape from "escape-html";
import clickCallback from "./clickCallback";
import formatMessage from "../../../format-message";

tinymce.create("tinymce.plugins.InstructureRecord", {
  init: function(ed) {
    ed.addCommand("instructureRecord", clickCallback.bind(this, ed, document));
    ed.addButton("instructure_record", {
      title: htmlEscape(
        formatMessage({
          default: "Record/Upload Media",
          description: "Title for RCE button to insert or record media"
        })
      ),
      cmd: "instructureRecord",
      icon: "video icon-video"
    });
  },

  getInfo: function() {
    return {
      longname: "InstructureRecord",
      author: "Brian Whitmer",
      authorurl: "http://www.instructure.com",
      infourl: "http://www.instructure.com",
      version: tinymce.majorVersion + "." + tinymce.minorVersion
    };
  }
});

// Register plugin
tinymce.PluginManager.add(
  "instructure_record",
  tinymce.plugins.InstructureRecord
);
