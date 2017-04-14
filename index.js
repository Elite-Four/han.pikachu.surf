function getKanaCallback(data) {
    for (const key in data) {
        const reading = data[key].kanji.reading
        console.log(`${key}：`, reading.kunyomi, '/' , reading.onyomi)
    }
}

export default text = {
    const $script = document.createElement('script')
    $script.onload = e => {
        document.body.removeChild($script)
    }
    $script.src = `http://app.tgbus.com/kanji/ToJp.ashx?&callback=getKanaCallback&keyword=${encodeURIComponent(text)}&encode=gb2312&app=3ds`
    document.body.appendChild($script)
}
