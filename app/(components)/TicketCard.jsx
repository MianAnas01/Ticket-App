import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg m-2 p-3">
      <div className="flex mb-3">
        <DeleteBlock />
        <div className="ml-auto">
          <PriorityDisplay />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is tickect description! please do this ticket
      </p>

      <ProgressDisplay />
      <StatusDisplay />
    </div>
  );
};

export default TicketCard;
