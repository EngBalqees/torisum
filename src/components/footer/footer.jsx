import React from "react";
import "../footer/footer.css";

function Footer() {
    return (
        <>
            <footer>
                <div className="topfooter">
                    <div className="container">
                        <div className="row">
                            <a href=""><img src="logo_white.png" /></a>
                            <p>العلامة التجارية البارزة في السياحه والسفر والتي جاءت لتلبي احتياجات المسافرين في الاردن وخارجها</p>
                            <a className="tel">0096279030111</a>
                            <a className="tel">0096262229292</a>
                            <a className="email">info@crown_tourism.com</a>
                            <div className="social-icons">
                                <ul>
                                    <li><a href=""><img src="facebook.png" /></a></li>
                                    <li><a href=""><img src="linkedin.png" /></a></li>
                                    <li><a href=""><img src="twitter.png" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="reviews">
                            <h2>Our facebook reviews</h2>
                            <div className="twit">
                                <p>
                                    تجربة رائعة في جزر المالديف تم تنظيمها من قبل شركة كروان . إحترافية في التعامل، دقة
                                    في
                                    المواعيد، شرح مفصل لمتطلبات الرحلة، وأسعار منافسة جداً. شكر خاص للمدير العام احمد
                                    الجعبري أيضاً على تعامله الراقي ومتابعته المستمرة معنا طوال فترة السفر.
                                    أمنياتي بالتوفيق الدائم لكم
                                </p>
                                <div class="date">Reviewer, Facebook</div>
                            </div>
                            <div className="twit">
                                <p>
                                    تجربة رائعة في جزر المالديف تم تنظيمها من قبل شركة كروان . إحترافية في التعامل، دقة
                                    في
                                    المواعيد، شرح مفصل لمتطلبات الرحلة، وأسعار منافسة جداً. شكر خاص للمدير العام احمد
                                    الجعبري أيضاً على تعامله الراقي ومتابعته المستمرة معنا طوال فترة السفر.
                                    أمنياتي بالتوفيق الدائم لكم
                                </p>
                                <div class="date">Reviewer, Facebook</div>
                            </div>
                            <div className="twit">
                                <p>
                                    A very respectable travel agency one of the best dealt with , very professional and
                                    skilled and
                                    committed all the best of success
                                </p>
                                <div class="date">Reviewer, Facebook</div>
                            </div>
                            <div className="twit">
                                <p>
                                    تجربة اكثر من رائعة و خدمة ممتازة و متابعة خلال الرحلة قبل الذهاب و عند رجوعنا من
                                    الرحلة
                                    صادقين بتعاملهم و بمواعيدهم و اهتمامهم بزبائنهم هذا ميزهم كثيرا عن المكاتب السياحية
                                    الاخرى
                                    شكرا كثيرا
                                </p>
                                <div class="date">Reviewer, Facebook</div>
                            </div>
                        </div>
                        <div className="row">
                            <h2>Newsletter</h2>
                            <p>Inspiration.ideas.news and your feedback</p>
                            <form>
                                <input value="Email Address"></input>
                                 <button>اشترك</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="alrights">
                    <div className="container">
                        <span>|</span>
                        <a href="">Privacy Policy</a>
                        <span>|</span>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;