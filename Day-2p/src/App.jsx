import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <MessageCard 
        title="Welcome"
        message="This is your first message card."
      />

      <MessageCard 
        title="React Props"
        message="Props help pass data to components."
      />

      <MessageCard 
        title="Reusable Component"
        message="Same component, different content."
      />

      <MessageCard 
        title="Done!"
        message="You have successfully rendered multiple cards."
      />
    </div>
  );
}

export default App;

