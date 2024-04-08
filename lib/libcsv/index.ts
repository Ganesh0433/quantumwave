// Full Name
// Enrollment number
// Email Address
// Contact Number
// University / College Name
// Desired Internship Position
// Attendance
// Adaptability
// persistence
// Reliability
// Accuracy
// Resilience
// Communication
// Analytical skills
// Synergy
// Ethical Problem solver


interface InternshipApplication {
    fullName: string | undefined
    enrollmentNumber: string | undefined
    emailAddress: string | undefined
    contactNumber: string | undefined
    universityCollegeName: string | undefined
    desiredInternshipPosition: string | undefined
    attendance: string | undefined
    adaptability: string | undefined
    persistence: string | undefined
    reliability: string | undefined
    accuracy: string | undefined
    resilience: string | undefined
    communication: string | undefined
    analyticalSkills: string | undefined
    synergy: string | undefined
    ethicalProblemSolver: string | undefined
    attendanceReview: string | undefined
}

function csv_to_object(content: string): InternshipApplication[] {
    let final_object: InternshipApplication[] = []
    let data = content.split('\n').slice(1)

    data.forEach((raw_entry, i) => {
        const entry = raw_entry.split(',')
        final_object.push({
            fullName: entry[0],
            enrollmentNumber: entry[1],
            emailAddress: entry[2],
            contactNumber: entry[3],
            universityCollegeName: entry[4],
            desiredInternshipPosition: entry[5],
            attendance: entry[6],
            adaptability: entry[7],
            persistence: entry[8],
            reliability: entry[9],
            accuracy: entry[10],
            resilience: entry[11],
            communication: entry[12],
            analyticalSkills: entry[13],
            synergy: entry[14],
            ethicalProblemSolver: entry[15],
            attendanceReview: entry[16],
        })
    })

    return final_object
}


export { csv_to_object, type InternshipApplication  }
