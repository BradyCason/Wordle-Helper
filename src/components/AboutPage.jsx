export default function AboutPage() {

    return (
      <div style={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div style={{width: "600px"}}>
            <h2>About</h2>
            <p>This website was made by Brady Cason, a Computer Science and Engineering student at the University of California Irvine.<br /><br /></p>
            <p>I original wrote functionality of the Wordle Helper in Python in 2021. I then created a Unity App that I deployed to my phone with a user interface. Then, in 2024, I converted the python script to JavaScript, and I created this website using React.<br /><br /></p>
            <p>Hope you enjoy!</p>
        </div>
      </div>
    )
  }