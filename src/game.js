const fs = require('fs');

class game_of_life {
    constructor(filename, new_live_cell, new_dead_cell, pregens) {
        let method_name = "game_of_life(string, char, char, int) - ";
        let file_in = require('fs').readFileSync(filename, 'utf8');
        if (!file_in) {
            throw new Error(class_name + method_name + "File Not Found.");
        }
        let lines = file_in.split('\n');
        let dimensions = lines[0].split(' ');
        let width = parseInt(dimensions[0]);
        let height = parseInt(dimensions[1]);
        this.width = width;
        this.height = height;
        this.SetLiveCell(new_live_cell);
        this.SetDeadCell(new_dead_cell);
        this.table = new Array(width * height).fill(this.dead_cell);
        this.gens = 0;
        for (let row = 0; row < height; ++row) {
            let line = lines[row + 1];
            for (let col = 0; col < width; ++col) {
                this.table[col + (row * width)] = (line[col] === '*') ? this.live_cell : this.dead_cell;
            }
        }
        this.history = {
            indexes: (width * height) - 1,
            table: [this.table],
            live: [this.live_cell],
            dead: [this.dead_cell],
            gens: 0
        };
        if (pregens > 0) {
            this.NextNGen(pregens);
        }
    }
    game_of_life(filename, new_live_cell, new_dead_cell) {
        this(filename, new_live_cell, new_dead_cell, 0);
    }
    game_of_life(filename, pregens) {
        this(filename, '*', '-', pregens);
    }
    
}

class game_of_life {
    constructor(filename) {
        this.game_of_life(filename, '*', '-', 0);
    }

    game_of_life(filename, dead_cell, live_cell, new_width, new_height) {
        this.table = new Array(new_width * new_height).fill(dead_cell);
        const file_in = new StringStream(new_table);
        let line;
        for (let row = 0; row < new_height; ++row) {
            line = file_in.getline();
            for (let col = 0; col < new_width; ++col) {
                if (line[col + (row * new_width)] !== dead_cell) {
                    this.table[col + (row * new_width)] = live_cell;
                }
            }
        }
        this.width = new_width;
        this.height = new_height;
        this.gens = 0;
        this.history.indexes = (this.width * this.height) - 1;
    }

    errorIndex(row, col) {
        if (this.width <= col && this.height <= row) {
            return "Index Out of Bounds for given row: " + row + ", and given column: " + col + ". Row limit: " + (this.height - 1) + " Column limit: " + (this.width - 1);
        } else if (!(this.width <= col) && this.height <= row) {
            return "Index Out of Bounds for given row: " + row + ". Row limit: " + (this.height - 1);
        } else {
            return "Index Out of Bounds for given column: " + col + ". Column limit: " + (this.width - 1);
        }
    }
    errorWindow(width_size, height_size) {
        if (width < width_size && height < height_size)
            return "Window size too large for given width: " + width_size + ", and given height: " + height_size + ". Max width: " + width + " Max height: " + height;
        else if (width < width_size && !(height < height_size))
            return "Window size too large for given width: " + width_size + ". Max width: " + width;
        else
            return "Window size too large for given height: " + height_size + ". Max height: " + height;
    }
    
    
}


