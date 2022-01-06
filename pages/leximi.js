const Leximi = () => {
    return (
        <div className="box">
            <h1 className="title">Si të lexoj?</h1>
            <p>
                <div className="row justify-content-between">
                    <div className="col-md-6">
                        <h2>
                            Windows dhe Mac kompjuterët
                        </h2>
                        <p>
                            Formati <b><u>PDF</u></b> është më eleganti për lexim në ekrane të mëdha.
                        </p>
                        <p>
                            <b><u>EPUB</u></b> është format që mundëson ndryshimin e madhësisë, fontit dhe ngjyrës së tekstit për lexim më të përshtatshëm.
                            Programe të njohura për lexim të librave EPUB janë:
                            <ul list-style="none">
                                <li>
                                    <a href="https://www.adobe.com/solutions/ebook/digital-editions/download.html" target="_blank">Adobe Digital Editions (Windows & Mac)</a>
                                </li>
                                <br />
                                <li>

                                    <a href="https://www.apple.com/apple-books/" target="_blank">Apple Books (Mac)</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                    <div className="col-md-6">
                        <h2>
                            iOS dhe Android
                        </h2>
                        <p>
                            <b><u>EPUB</u></b> është formati më i përshtatshëm për lexim në mobil.
                            Aplikacione më të njohura për pajisjet me iOS dhe Android:
                            <ul list-style="none">
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.books&hl=en&gl=US" target="_blank">Google Play Books (Android)</a>
                                </li>
                                <br />
                                <li>

                                    <a href="https://apps.apple.com/us/app/apple-books/id364709193" target="_blank">Apple Books (iOS)</a>
                                </li>
                            </ul>
                        </p>
                    </div>
                    {/* <div className="col-md-4">
                        <h2>
                            Kindle, Paperwhite, Oasis dhe e-lexues të tjerë
                        </h2>
                        <p>
                            Shkarkoni verzionin <b><u>MOBI</u></b> të librit të kërkuar për të lexuar në pajisjen tuaj.
                            Aplikacione më të njohura për pajisjet me iOS dhe Android:
                            <ul list-style="none">
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.books&hl=en&gl=US" target="_blank">Google Play Books (Android)</a>
                                </li>
                                <br />
                                <li>

                                    <a href="https://apps.apple.com/us/app/apple-books/id364709193" target="_blank">Apple Books (iOS)</a>
                                </li>
                            </ul>
                        </p>
                    </div> */}
                </div>
            </p>
        </div>
    );
}

export default Leximi;