import React from "react";
import "../homepage/home.css";

function Home() {
    return (
        <>
            <main>
                <div className="why">
                    <div className="container">
                        <h2>لماذا شركة كراون</h2>
                        <p>العلامة التجارية البارزة في السياحه والسفر والتي جاءت لتلبي احتياجات المسافرين في الاردن وخارجها</p>
                        <div className="row">
                            <div className="item">
                                <a href=""><img src="why3.png" /></a>
                                <h4>ما بعد الحجز</h4>
                                <span>خدمات ما بعد الحجز عن طريق تعديل الحجوزات وإلغاء الحجوزات  بسهوله  و باحترافيه عاليه</span>
                            </div>
                            <div className="item">
                                <a href=""><img src="why1.png" /></a>
                                <h4>الالتزام</h4>
                                <span>الالتزام بجدول الزبائن كما هو موضح في البرنامج لديهم، والذهاب الى اكثر من وجهة في الرحلة حتى يستمتع العميل في كل وجه يزورها
                                    ، وذلك مع ضمان العمل فيما يتماشة مع قيمنا الاساسية وعدم التنازل عن معايير الخدمة العالية لدينا</span>
                            </div>
                            <div className="item">
                                <a href=""><img src="why2.png" /></a>
                                <h4>التمثيل العالمي</h4>
                                <span>تفتخر كراون للسياحة والسفر بوجودها في تركيا وماليزيا مع مكاتبنا المخصصة وخبراء السفر المدربين تدريباً مهنياً ،
                                     بدعم من مكاتب تمثيلية في جميع أنحاء العالم تقدم الدعم للعملاء اثناء رحلتهم</span>
                            </div>
                            <div className="item">
                                <a href=""><img src="why4.png" /></a>
                                <h4>24/7</h4>
                                <span>خدمة 24 ساعة من خلال مستشار السفر لدينا سواء على جميع انواع التواصل</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="about">
                    <div className="container">
                        <div className="image">
                            <img src="people.png" />
                        </div>
                        <div className="content">
                            <div className="text">
                                <h1>كراون</h1>
                                <span >العلامة التجارية البارزة في السياحه والسفر والتي جاءت لتلبي احتياجات المسافرين في الاردن وخارجها</span>
                                <p className="sm">تأسست الشركة في الاردن ، تقدم الشركة لعملائها السهولة والراحة التامة والحلول المتعددة لإجراء حجوزات الفنادق
                                    مع أكثر من 1.5 مليون فندق حول العالم ورحلات طيران إلى آلاف الوجهات مع أكثر من 450 من خطوط الطيران، بالإضافة إلى باقات عطلات متكاملة</p>
                                <p>كراون هي بوابتك لعالم السفر ووجهتك الأولى للتخطيط لرحلة تفوق التوقعات</p>
                            </div>
                            <div className="lines">
                                <div className="distance">
                                    <div className="ditext">
                                        <p>Flight|الرحلات الجوية</p>
                                        <p>+5000</p>
                                    </div>
                                    <div className="line">

                                    </div>
                                </div>
                                <div className="distance">
                                    <div className="ditext">
                                        <p>Hotels | الفنادق</p>
                                        <p>+1000</p>
                                    </div>
                                    <div className="line">

                                    </div>
                                </div>
                                <div className="distance">
                                    <div className="ditext">
                                        <p>Countries | البلدان</p>
                                        <p>+195</p>
                                    </div>
                                    <div className="line">

                                    </div>
                                </div>
                                <div className="distance">
                                    <div className="ditext">
                                        <p>Places | الأماكن السياحية</p>
                                        <p>+3000</p>
                                    </div>
                                    <div className="line">

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="what">
                    <div className="container">
                        <div className="what1">
                            <h2>عملياتنا</h2>
                            <p>
                                تؤمن شركة كراون قوة بالعمل في الوجهات الرئيسية. نحن نغطي جميع جوانب السفر مضمونة الجودة ،
                                من الجولات الخاصة إلى الجولات داخل الحافلة، حتى عودة العميل الى البلاد
                            </p>
                        </div>
                        <div className="what1">

                            <h2>ما الذي يجعلنا مختلفين</h2>
                            <p>
                                تربط شركة كراون مع عملائها من الشركات الطريق لرحلات فريدة ومثيرة وخدمات ذات قيمة، بالاضافة انها تركز على التفاصيل والنهج الشخصي
                                والمحادثات مع الزبائن وتضمن لهم تجربة افضل طرق ونصائح السفر
                            </p>

                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
export default Home