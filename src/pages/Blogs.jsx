import './blogs.css'
function Blogs() {
  return (
    <div className="blogs">
      <div>
        <h3>Call organization</h3>
      <p>"When a user initiates a call, the mobile unit sends a signal to the nearest base station, which relays the signal to the mobile switching center(MSC). The MSC then uses the home location register(HLR) to determine the mobile units’ subscription information and the visitor location register(VLR) to determine its current location</p>
      </div>
      <div>
    
      <h3>Paging</h3>
      <p>The MSC sends a signal to all base stations within the mobile unit's coverage area, instructing them to page the mobile unit.</p>
      </div>

      <div>
        <h3>Call acceptance</h3>
      <p>When the mobile unit receives the paging signal, it responds with a signal indicating that it is ready to accept the call.</p>
      </div>

      <div>
        <h3>Ongoing call</h3>
        <p>
      Once the connection has been established, the mobile unit and base station communicate with each other to maintain the connection. MSC monitors the call and manages its routing to ensure that it remains connected.
      </p>
      </div>
      <div>
        <h3>Handoff</h3>
      <p>As the mobile unit moves from one call to another, the base station(BS) and MSC work together to hand off the call from one base station to the next without interrupting the connection</p>
      </div>
    </div>
  )
}

export default Blogs