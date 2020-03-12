export class Reimbursement {
  reimbursement_id: number;
  author: number; //foreign key to user_id
  amount: number;
  dateSubmitted: number;
  dateResolved: number;
  description: string;
  resolver: number; //foreign key to user_id
  status: number; //foreign key to reimb-status
  type: number; //foreign key to reimb-type

  constructor(
    reimbursement_id: number,
    author: number,
    amount: number,
    dateSubmitted: number,
    dateResolved: number,
    description: string,
    resolver: number,
    status: number,
    type: number
  ) {
    this.reimbursement_id = reimbursement_id;
    this.author = author;
    this.amount = amount;
    this.dateSubmitted = dateSubmitted;
    this.dateResolved = dateResolved;
    this.description = description;
    this.resolver = resolver;
    this.status = status;
    this.type = type;
  }
}
