function speak(txt, opts) {
    let utter = new SpeechSynthesisUtterance(txt);

    utter.rate = 1.5;

    opts = opts||{};
    if (opts.rate)
        utter.rate = opts.rate;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
}
