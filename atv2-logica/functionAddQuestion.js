"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addQ = void 0;
function addQuestion() {
    var numeroQuestao = 0;
    return function () {
        console.log("");
        console.log("Quest\u00E3o: ".concat((numeroQuestao += 1)));
    };
}
exports.addQ = addQuestion();
