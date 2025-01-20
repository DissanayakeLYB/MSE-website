import './About.css';

function OurStaff() {
    const staff = [
        {
            name: "Prof. John Doe",
            title: "Head of Department",
            specialization: "Polymer Science",
            email: "john.doe@mrt.ac.lk",
            image: "path_to_image"
        },
        // Add more staff members
    ];

    return (
        <div className="staff-container">
            <h1>Our Staff</h1>
            <div className="staff-grid">
                {staff.map((member, index) => (
                    <div key={index} className="staff-card">
                        <div className="staff-image">
                            <img src={member.image} alt={member.name} />
                        </div>
                        <div className="staff-info">
                            <h3>{member.name}</h3>
                            <p className="title">{member.title}</p>
                            <p className="specialization">{member.specialization}</p>
                            <a href={`mailto:${member.email}`}>{member.email}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurStaff; 