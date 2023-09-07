    var homeContent = `<div class="wrapper homepage">
    <div class="hero-home-top">
        <div class="heading-home-hero">travel-fly</div> <br>
        <div class="sub-home-hero">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> 
            Fugiat aliquid minus nemo sed est.</div>
            <div class="button-hero-readmore">READ MORE</div>
    </div>

    <div class="main-content-wrap">
    <div class="tripsContainer">
    
    <div class="trips-index ti-1">
            <div class="ti-overlay">
                <div class="ti-trip-name">
                    ISRAEL
                </div>
                <div class="ti-trip-price">from $1000</div>
                <div class="ti-button">
                    LEARN MORE
                </div>
            </div>
        </div>
        <div class="trips-index ti-2">
            <div class="ti-overlay">
                <div class="ti-trip-name">
                    U.S.A
                </div>
                <div class="ti-trip-price">from $1500</div>
                <div class="ti-button">
                    LEARN MORE
                </div>
            </div>
        </div>
        <div class="trips-index ti-3">
            <div class="ti-overlay">
                <div class="ti-trip-name 3">
                    AUSTRALIA
                </div>
                <div class="ti-trip-price">from $1800</div>
                <div class="ti-button">
                    LEARN MORE
                </div>
            </div>
        </div>
    </div>
    </div>
    <div class="booking-title prox">Booking form</div>
    <div class="booking-holder">
        <div class="top-left">
            <input type="text" name="fullName" class="form-med" id="fullName" placeholder="name...">
            <input type="text" name="country" class="form-med" id="country" placeholder="country...">
        </div>
        <div class="top-right">
            <input type="text" name="emailAddy" class="form-lg" id="emailAddy" placeholder="email...">
            <input type="text" name="hotelName" class="form-lg" id="hotelName" placeholder="hotel...">
        </div>
        <div class="middle-form">
        <div class="dates">
            <div class="date-checkin">
                <label for="#fromWhen">CheckIn</label>
                <input type="datetime" name="fromWhen" class="form-date" id="fromWhen" placeholder="08/14/2023">
            </div>
            <div class="date-checkout">
                <label for="#toWhen" >CheckOut</label>
                <input type="datetime" name="toWhen" class="form-date" id="toWhen" placeholder="08/17/2023">
            </div>
        </div>
    </div>
        <div class="inParty-roomsBooked">
            <label for="#adultsInParty">Adults</label>
            <input type="number" name="adultsInParty" id="adultsInParty" placeholder="1">
            <label for="#childrenInParty">Children</label>
            <input type="number" name="childrenInParty" id="childrenInParty" placeholder="0">
            <label for="#roomsBooked">Rooms</label>
            <input type="number" name="roomsBooked" id="roomsBooked" placeholder="1">
        </div>
        <div class="message-area">
            <input type="text" name="messageArea" id="messageArea">
        </div>
        <div class="submit-button">SUBMIT</div>

    </div>
    <footer>
        <div class="logo-footer">travel-fly</div>
    
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
    </footer>
</div>`;
    var aboutContent = `<div class="wrapper about">
    <div class="placeholder-nav"></div>
    
        <div class="title prox">ABOUT:</div>
        <div class="line"></div>

        <div class="about-text">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>

        <div class="client-quotes prox">
           CLIENT QUOTES:
           <div class="line"></div>
        </div>

        <div class="client" id="miranda">
            <div class="left-top"><img src="images/about-client-01.png" alt=""></div>
            <div class="right-about-text gill">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
            </div>
            <span>- Miranda Brown</span>
        </div>
        <div class="client" id="johnathan">
            <div class="left-bottom"><img src="images/about-client-02.png" alt=""></div>
            <div class="right-about-text">
                <div class="right-about-text gill">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    </div>
                    </div>
                    <span>- Johnathan Wes</span>
        </div>
    </div>
    <footer>
    <div class="logo-footer">travel-fly</div>
    <div class="copy-notice">
        Copyright 2023 travel - fly. All rights reserved.
    </div>
    <div class="social">
        <img src="images/facebook-1.png" alt="facebook">
        <img src="images/twitter-1.png" alt="twitter">
        <img src="images/instagram-1.png" alt="">
    </div>
    </footer>`;
    var toursContent = `<div id="tours" class="wrapper tours">
    <div class="nav-placeholder-tours"></div>
    
    <div class="page-title">
        <div class="overlay prox">
            TOURS
        </div>
    </div>
    <div class="tours-container">
    <div class="tour israel">
        <div class="overlay-tour">
            <div class="tour-title prox">
                Israel
            </div>
            <div class="tour-price prox">
                from $1000
            </div>    
          <button id="tour01" class="trip-button gill">LEARN MORE</button>   
          
        </div>
    </div>
    <div class="tour usa">
        <div class="overlay-tour">
            <div class="tour-title prox">
                U.S.A
            </div>
            <div class="tour-price prox">
                from $1500
            </div>    
            <button id="tour02" class="trip-button gill">LEARN MORE</button>                         
        </div>
    </div>

    <div class="tour aus">
        <div class="overlay-tour">
            <div class="tour-title prox">
                Austalia
            </div>
            <div class="tour-price prox">
                from $1500
            </div>    
            <button id="tour03" class="trip-button gill">LEARN MORE</button>                        
        </div>
    </div>

    <div class="tour nz">
        <div class="overlay-tour">
            <div class="tour-title prox">
                New Zealand
            </div>
            <div class="tour-price prox">
                from $1200
            </div>  
            <button id="tour04" class="trip-button gill">LEARN MORE</button>                       
        </div>
    </div>
    <div class="tour france">
        <div class="overlay-tour">
            <div class="tour-title prox">
                France
            </div>
            <div class="tour-price prox">
                from $1200
            </div>    
            <button id="tour05" class="trip-button gill">LEARN MORE</button>                           </div>
    </div>
    <div class="tour egypt">
        <div class="overlay-tour">
            <div class="tour-title prox">
                Egypt
            </div>
            <div class="tour-price prox">
                from $1200
            </div>    
            <button id="tour06" class="trip-button gill">LEARN MORE</button>                                           </div>
    </div>
 
    <div class="tour japan">
        <div class="overlay-tour">
            <div class="tour-title prox">
                Japan
            </div>
            <div class="tour-price prox">
                from $1200
            </div>    
            <button id="tour07" class="trip-button gill">LEARN MORE</button>                                           </div>
    </div>
    
    <div class="tour canada">
        <div class="overlay-tour">
            <div class="tour-title prox">
                Canada
            </div>
            <div class="tour-price prox">
                from $1200
            </div>    
            <button id="tour08" class="trip-button gill">LEARN MORE</button>                                           </div>
    </div>

    <div class="tour uae">
        <div class="overlay-tour">
            <div class="tour-title prox">
                U.A.E
            </div>
            <div class="tour-price prox">
                from $1200
            </div>    
            <button id="tour09" class="trip-button gill">LEARN MORE</button>                       
        </div>
    </div>
    </div>
</div>
<footer>
<div class="logo-footer">travel-fly</div>    
    <div class="copy-notice">
        Copyright 2023 travel-fly. All rights reserved.
    </div>
    <div class="social">
        <img src="images/facebook-1.png" alt="facebook">
        <img src="images/twitter-1.png" alt="twitter">
        <img src="images/instagram-1.png" alt="">
    </div>
    </footer>`;
    var tour01Content = `<div id="tour01Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder israel">
            <div class="callout-overlay">
                <div class="titleDestination prox">
                Israel tour package
                        </div>
                <div class="howMuch prox">
                    starting from $1000
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/israel-tour-00.png" alt=""></div>
            <div class="locale 01"><img src="images/israel-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/israel-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var tour02Content = `<div id="tour02Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder usa">
            <div class="callout-overlay">
                <div class="titleDestination prox">
                U.S.A tour package
                        </div>
                <div class="howMuch prox">
                    starting from $1500
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/usa-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/usa-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/usa-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>
`;
    var tour03Content = `<div id="tour03Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder aus">
            <div class="callout-overlay">
                <div class="titleDestination prox">
                Australia tour package
                        </div>
                <div class="howMuch prox">
                    starting from $1800
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/aus-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/aus-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/aus-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var tour04Content = `<div id="tour04Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder nz">
            <div class="callout-overlay">
                <div class="titleDestination prox">
                New Zealand tour package
                        </div>
                <div class="howMuch prox">
                    starting from $1200
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/nz-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/nz-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/nz-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var tour05Content = `<div id="tour05Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder france">
            <div class="callout-overlay">
                <div class="titleDestination prox">
               France tour package
                        </div>
                <div class="howMuch prox">
                    starting from $2500
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/france-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/france-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/france-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var tour06Content = `<div id="tour06Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder egypt">
            <div class="callout-overlay">
                <div class="titleDestination prox">
               Egypt tour package
                        </div>
                <div class="howMuch prox">
                    starting from $900
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/egypt-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/egypt-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/egypt-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var tour07Content = `<div id="tour07Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder japan">
            <div class="callout-overlay">
                <div class="titleDestination prox">
               Japan tour package
                        </div>
                <div class="howMuch prox">
                    starting from $1300
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/japan-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/japan-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/japan-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var tour08Content = `<div id="tour08Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder canada">
            <div class="callout-overlay">
                <div class="titleDestination prox">
               Canada tour package
                        </div>
                <div class="howMuch prox">
                    starting from $2000
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/canada-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/canada-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/canada-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var tour09Content = `<div id="tour09Content">
    <div class="wrapper itinerary">
        <div class="placeholder-nav--package"></div>
        <div class="callout-holder uae">
            <div class="callout-overlay">
                <div class="titleDestination prox">
               U.A.E tour package
                        </div>
                <div class="howMuch prox">
                    starting from $3000
                </div>
            </div>
        </div>
        <div class="container-locale">
            <div class="locale 00"><img src="images/uae-tour-01.png" alt=""></div>
            <div class="locale 01"><img src="images/canada-tour-02.png" alt=""></div>
            <div class="locale 02"><img src="images/canada-tour-03.png" alt=""></div>
        </div>
        <div class="container-schedule">
            <div class="day">
               <div class="dayPound prox">Day #1:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #2:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            <div class="day">
               <div class="dayPound prox">Day #3:</div>
               <div class="line"></div>
                <p class="scheduleText prox">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
            </div>
            
        </div>
        <div class="book-now-button">BOOK NOW</div>
    </div>
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
        
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
        </footer>`;
    var offersContent = `<div class="wrapper offers">
    <div class="placeholder--nav-offers"></div>

    <div class="offers--pageTitle prox">SPECIAL OFFER(S): </div>
    <div class="line-199"></div>

    <div class="offer" id="offer1">
        <div class="offer-image">
            <img src="images/special-offer-01.png" alt="">
        </div>
        <div class="offer-textbox">
            <div class="offer-title-text-box">
        <div class="offer-title prox">BARCELONA, SPAIN</div>
        <div class="line-96"></div>
            </div>
        <div class="offer-description gill">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
        <div class="lm-button gill">LEARN MORE</div>
    </div>
    <div class="offer-discount prox">(20% OFF!)</div>
</div>

    <div class="offer" id="offer2">
        <div class="offer-image">
            <img src="images/special-offer-02.png" alt="">
        </div>
        <div class="offer-textbox">
            <div class="offer-title-text-box">
        <div class="offer-title prox">BANGKOK, THAILAND</div>
        <div class="line-110"></div>
            </div>
        <div class="offer-description gill">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
        <div class="lm-button gill">LEARN MORE</div>
    </div>
    <div class="offer-discount prox">(20% OFF!)</div>
</div>

</div>
<footer>
    <div class="logo-footer">travel-fly</div>
    
    <div class="copy-notice">
        Copyright 2023 travel-fly. All rights reserved.
    </div>
    <div class="social">
        <img src="images/facebook-1.png" alt="facebook">
        <img src="images/twitter-1.png" alt="twitter">
        <img src="images/instagram-1.png" alt="">
    </div>
    </footer>`;
    var blogContent = `<div class="wrapper blog">
    <div class="placeholder-nav--blog"></div>

    <div class="title--blog prox">BLOG:</div>
    <div class="line106"></div>

    <div class="post-field">
        <div class="datebox">
            <div class="box dd gill">06</div>
            <div class="box mm gill">JUN</div>
        </div>
    <div class="blog-post-area">
    <div class="blog-image"></div>
        <div class="post-title gill">
            Sed et persipiatis unde omnis iste
        </div>
        <div class="post-body gill">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        </div>
    </div>
    </div>
    <div class="post-field">
        <div class="datebox">
            <div class="box dd gill">23</div>
            <div class="box mm gill">JUL</div>
        </div>
    <div class="blog-post-area">
    <div class="blog-image"></div>
        <div class="post-title gill">
            Sed et persipiatis unde omnis iste
        </div>
        <div class="post-body gill">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
        </div>
    </div>
    </div>
    
</div>
    <footer>
        <div class="logo-footer">travel-fly</div>
    
        <div class="copy-notice">
            Copyright 2023 travel-fly. All rights reserved.
        </div>
        <div class="social">
            <img src="images/facebook-1.png" alt="facebook">
            <img src="images/twitter-1.png" alt="twitter">
            <img src="images/instagram-1.png" alt="">
        </div>
    </footer>`;
    var contactContent = `<div class="wrapper contact">
    <div class="placeholder-nav--blog"></div>

    <div class="contact-title prox">
        CONTACT US:
    </div>
    <div class="line100"></div>

    <div class="content-holder-contact">
    <div class="map-section-left">
    <div class="map"></div>
    <div class="map-address gill">
        travel-fly Inc. <br>
        8901 Marmora Road, <br>
        Glasgow, D04 89GR. <br>
        Freephone:+1 800 559 6580 <br>
        Telephone:+1 800 603 6035 <br>
        FAX:+1 800 889 9898 <br>
        E-mail: mail@travelfly.org
    </div>

</div>

<div class="form-section-right">
    <input class="form-field gill" type="text" id="yourName" placeholder="Your Name..."></input>
    <input class="form-field gill" type="text" id="emailAddress" placeholder="Email Address..."></input>
    <input class="form-field gill" type="text" id="yourCompany" placeholder="Your Company..."></input>
    <input type="text" class="text-box gill" id="messageArea" placeholder="Message...">
    <div class="sendMsg">SEND MESSAGE</div>
</div>

</div>
</div>
<footer>
    <div class="logo-footer">travel-fly</div>

    <div class="copy-notice">
        Copyright 2023 travel-fly. All rights reserved.
    </div>
    <div class="social">
        <img src="images/facebook-1.png" alt="facebook">
        <img src="images/twitter-1.png" alt="twitter">
        <img src="images/instagram-1.png" alt="">
    </div>
</footer>`;

export function showTourContent(tourID){
    let tourName = tourID + "Content";
        $("#app").html(eval(tourName));
    }



    export function changePageContent(pageID){
        let pageName = pageID + "Content";
        $("#app").html(eval(pageName));
      
    }

