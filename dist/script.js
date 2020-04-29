function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class Clock extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleDefaultDate",















    () => {
      let d = new Date();

      d.setMinutes(25);
      d.setSeconds(0);
      let min = d.getMinutes();
      let sec = d.getSeconds();
      if (min < 10) {min = `0${min}`;};
      if (sec < 10) {sec = `0${sec}`;};
      let timec = `${min}:${sec}`;
      this.setState({
        timel: timec });


      d.setMinutes(5);
      d.setSeconds(0);
      min = d.getMinutes();
      sec = d.getSeconds();
      if (min < 10) {min = `0${min}`;};
      if (sec < 10) {sec = `0${sec}`;};
      timec = `${min}:${sec}`;
      this.setState({
        breakcount: timec });


    });_defineProperty(this, "handleReset",

    () => {
      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;
      this.setState({
        breakl: 5,
        sessionl: 25,
        start_stop: "start",
        start_stop_b: "start",
        timer: false,
        breaktimer: false });


      this.handleDefaultDate();

      clearInterval(this.state.timer);
      clearInterval(this.state.breaktimer);
    });_defineProperty(this, "handleIncrement",


    event => {
      if (this.state.timer == false && this.state.breaktimer == false) {
        if (event.target.id == "break-increment") {
          if (this.state.breakl < 60) {
            let bl = this.state.breakl + 1;
            let min;
            bl < 10 ? min = `0${bl}` : min = bl;
            let timec = `${min}:00`;
            this.setState({
              breakl: bl,
              breakcount: timec });

          }
        } else if (event.target.id == "session-increment") {
          if (this.state.sessionl < 60) {
            let bl = this.state.sessionl + 1;
            let min;
            bl < 10 ? min = `0${bl}` : min = bl;
            let timec = `${min}:00`;
            this.setState({
              sessionl: bl,
              timel: timec });

          }
        }
      }


    });_defineProperty(this, "handleDecrement",


    event => {
      if (this.state.timer == false && this.state.breaktimer == false) {
        if (event.target.id == "break-decrement") {
          if (this.state.breakl > 1) {
            let bl = this.state.breakl - 1;
            let min;
            bl < 10 ? min = `0${bl}` : min = bl;
            let timec = `${min}:00`;
            this.setState({
              breakl: bl,
              breakcount: timec });

          }


        } else if (event.target.id == "session-decrement") {
          if (this.state.sessionl > 1) {
            let bl = this.state.sessionl - 1;
            let min;
            bl < 10 ? min = `0${bl}` : min = bl;
            let timec = `${min}:00`;
            this.setState({
              sessionl: bl,
              timel: timec });

          }
        }
      }
    });_defineProperty(this, "handleTimer",

    () => {
      if (this.state.timel !== "59:58") {
        if (this.state.start_stop == "start") {
          var self = this;
          this.setState({
            start_stop: "stop" });

          var timer = setInterval(function () {
            let statet = self.state.timel;
            let ctime = statet.split(":");
            let d = new Date();
            d.setMinutes(ctime[0]);
            d.setSeconds(ctime[1]);
            let sec = d.getSeconds() - 1;

            d.setSeconds(sec);
            let min = d.getMinutes();
            sec = d.getSeconds();
            if (min < 10) {min = `0${min}`;};
            if (sec < 10) {sec = `0${sec}`;};

            let timec = `${min}:${sec}`;
            self.setState({
              timel: timec });

            if (self.state.timel == "59:59") {
              document.getElementById("beep").play();
              clearInterval(self.state.timer);
              let bl = self.state.breakl;
              let min;
              bl < 10 ? min = `0${bl}` : min = bl;
              let timec = `${min}:00`;
              self.setState({
                timel: "59:58",
                breakcount: timec,
                start_stop_b: "start",
                timer: false });

              self.handleTimer();
            }

          }, 1000);

          this.setState({
            timer: timer });


        } else if (this.state.start_stop == "stop") {
          this.setState({
            start_stop: "start" });

          clearInterval(this.state.timer);
          this.setState({
            timer: false,
            breaktimer: false });




        }
      } else if (this.state.breakcount !== "59:58") {
        if (this.state.start_stop_b == "start") {
          var self = this;

          this.setState({
            start_stop_b: "stop" });

          var btimer = setInterval(function () {
            let statebc = self.state.breakcount;
            let btime = statebc.split(":");
            let dt = new Date();
            dt.setMinutes(btime[0]);
            dt.setSeconds(btime[1]);
            let bsec = dt.getSeconds() - 1;
            dt.setSeconds(bsec);
            let bmin = dt.getMinutes();
            bsec = dt.getSeconds();
            if (bmin < 10) {bmin = `0${bmin}`;};
            if (bsec < 10) {bsec = `0${bsec}`;};
            let btimec = `${bmin}:${bsec}`;
            self.setState({
              breakcount: btimec });


            if (self.state.breakcount == "59:59") {
              document.getElementById("beep").play();
              clearInterval(self.state.breaktimer);
              let bl = self.state.sessionl;
              let min;
              bl < 10 ? min = `0${bl}` : min = bl;
              let timec = `${min}:00`;
              self.setState({
                breakcount: "59:58",
                timel: timec,
                start_stop: "start"
                // breaktimer: false
              });
              self.handleTimer();
            }

          }, 1000);

          this.setState({
            breaktimer: btimer });




        } else if (this.state.start_stop_b == "stop") {
          this.setState({
            start_stop_b: "start" });


          clearInterval(this.state.breaktimer);
          this.setState({
            breaktimer: false,
            timer: false });



        }
      }


    });this.state = { breakl: 5, sessionl: 25, timel: "", start_stop: "start", start_stop_b: "start", timer: false, breakcount: "", breaktimer: false };}





  componentDidMount() {
    this.handleDefaultDate();
  }

  render() {
    return (
      React.createElement(React.Fragment, null,
      React.createElement("h1", { className: "text-center" }, "Pomodoro Clock"),
      React.createElement("div", { className: "d-flex justify-content-around" },
      React.createElement("div", null,
      React.createElement("h3", { id: "break-label" }, "Break Length"),
      React.createElement("div", { className: "d-flex justify-content-around" },
      React.createElement("button", { onClick: this.handleIncrement, id: "break-increment" }, "\u2191"),
      React.createElement("h4", { id: "break-length" }, this.state.breakl),
      React.createElement("button", { onClick: this.handleDecrement, id: "break-decrement" }, "\u2193"))),




      React.createElement("div", null,
      React.createElement("h3", { id: "session-label" }, "session Length"),
      React.createElement("div", { className: "d-flex justify-content-around" },
      React.createElement("button", { id: "session-increment", onClick: this.handleIncrement }, " \u2191"),
      React.createElement("h4", { id: "session-length" }, this.state.sessionl),
      React.createElement("button", { onClick: this.handleDecrement, id: "session-decrement" }, "\u2193")))),





      React.createElement("div", { className: "text-center mt-5 w-50 clock-container" },
      React.createElement("h3", { id: "timer-label" }, this.state.timel !== "59:58" ? "Session" : "Break", " "),

      React.createElement("h1", { id: "time-left" },
      this.state.timel !== "59:58" ? this.state.timel : this.state.breakcount),
      React.createElement("div", { className: "mb-2" },
      React.createElement("button", { onClick: this.handleTimer, className: "mr-1", id: "start_stop" }, "s/t"),
      React.createElement("button", { onClick: this.handleReset, id: "reset" }, "reset"))),



      React.createElement("audio", { id: "beep", preload: "auto",
        src: "https://goo.gl/65cBl1" })));




  }}


ReactDOM.render(React.createElement(Clock, null), document.getElementById("root"));