function BlindDungeonMap() {
    this.map = [
        ['.', '.', '.', '.'],
        ['.', '#', '#', '#'],
        ['.', '.', '.', '#'],
        ['.', '#', '.', '!'],
    ];
    this.width = 4;
    this.height = 4;
}

BlindDungeonMap.prototype.canmove = function(p) {
    return this.at(p) != '#';
};

BlindDungeonMap.prototype.at = function(p) {
    if (p[0] < 0 || p[0] >= this.width || p[1] < 0 || p[1] >= this.height)
        return '#';
    return this.map[p[1]][p[0]];
};
