class ReportedEvent {
  constructor (props) {    
    this.id = props.id
    this.eventId = props.eventId
    this.completedStatus = props.completedStatus
    this.completedStatusComment = props.completedStatusComment
  }

  get getId() { this.id }

  get getEventId() { this.eventId }

  get getCompletedStatus() { this.completedStatus }

  get getCompletedStatusComment() { this.completedStatusComment }
  
  set setCompletedStatus(status) {
    this.completedStatus = status
    return this.completedStatus
  }

  set setCompletedStatusComment(comment) {
    this.completedStatusComment = comment
    return this.completedStatusComment
  }
}

export default ReportedEvent
