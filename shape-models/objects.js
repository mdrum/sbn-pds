$(document).ready(function() {
    const bodies = Bodies;
    const errorMessage = $('#error-message');
    const objectNames = Object.keys(bodies);
    const table =
    `<div class="table" id="shape-model-table">
        <div class="row header">
            <div class="cell">Object Name</div>
            <div class="cell">Link to Dataset</div>
            <div class="cell">Files</div>
            <div class="cell">Preview</div>
        </div>
    </div>`;
    
    errorMessage.replaceWith(table);
    
    const reAlpha = /[^a-zA-Z]/g;
    const reNum = /[^0-9]/g;

    function sortAlphaNum(a, b) {
        const aA = a.replace(reAlpha, "");
        const bA = b.replace(reAlpha, "");
        if (aA === bA) {
            const aN = parseInt(a.replace(reNum, ""), 10);
            const bN = parseInt(b.replace(reNum, ""), 10);
            return aN === bN ? 0 : aN > bN ? 1 : -1;
        } else {
            return aA > bA ? 1 : -1;
        }
    }
    
    const newNames = objectNames.sort(sortAlphaNum);
    newNames.map(name => {
        const $table = $("#shape-model-table");
        
        const $row = $('<div>', {class: 'row'});
        
        const newCell = function(element) {
            const $cell = $('<div>', {class: 'cell'});
            $cell.append(element);
            return $cell;
        };
        
        // construct name cell
        const $name = newCell(`<p>${name}</p>`);
        $row.append($name);
        
        // construct link to dataset cell
        const dataset = bodies[name]['dataset'];
        $row.append(newCell(`<a href="${dataset}" target="_blank">Browse Dataset</a>`));
        
        // construct files cell
        const $filesCell = $('<div>', {class: 'cell'});
        const $list = $('<ul>');
        const files = bodies[name]['files'];
        const fileNames = Object.keys(files);
        fileNames.map(fileName => {
            $list.append(`<li>${fileName}</li><ul><li><a href="${files[fileName]['archived']}" target="_blank" download>Download Original</a></li><li><a href="${files[fileName]['obj']}">Download .obj</a></li></ul></li>`);
        });
        
        $filesCell.append($list);
        $row.append($filesCell);
        
        // construct preview cell
        const preview = bodies[name]['preview'];
        $row.append(newCell(`<img src="${preview}" class="preview">`));
        
        $table.append($row);
    });
});