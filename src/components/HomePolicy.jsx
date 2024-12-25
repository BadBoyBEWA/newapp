import React from 'react'
import { ArrowCounterclockwise, Award, Gift } from 'react-bootstrap-icons'

export default function HomePolicy() {
  return (
    <div className='homePolicy'>
        <div className="keyMilestones">
            <div className="keyMilestonesWrapper">
                <div className="achievement">
                    <h4>10,000</h4>
                    <p>Happy Customers</p>
                </div>
                <div className="achievement">
                    <h4>100</h4>
                    <p>Branches</p>
                </div>
                <div className="achievement">
                    <h4>1,000</h4>
                    <p>Partner</p>
                </div>
                <div className="achievement">
                    <h4>100</h4>
                    <p>Awards</p>
                </div>
            </div>
        </div>

        <div className="services">
            <div className="servicesWrapper">
                <div className="serviceSubTitle">
                    <h1>Services</h1>
                    <h3>We want you to express yourself</h3>
                </div>

                <div className="serviceCardWrapper">
                    <div className="serviceCard">
                        <ArrowCounterclockwise className='policyIcon'/>
                        <h4>Refund Policy</h4>
                        <p>For more details, please review our full return policy on our website or reach out to us for assistance.</p>
                    </div>

                    <div className="serviceCard">
                        <Gift className='policyIcon'/>
                        <h4>Premium Packaging</h4>
                        <p>The Premium Package is ideal for those who seek a more personalized, efficient, and comprehensive experience. One of the key benefits is priority support.</p>
                    </div>

                    <div className="serviceCard">
                        <Award className='policyIcon'/>
                        <h4>Superior Quality</h4>
                        <p>customer satisfaction is the ultimate measure of superior quality. A high-quality product or service doesn’t just meet the functional requirements.</p>
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}
