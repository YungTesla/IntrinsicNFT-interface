import "../../assets/Process.css";
import ProcessSteps from "../../components/ProcessSteps";

function Process() {
  return (
    <div class="process-container">
      <button class="prev">&#10094;</button>

      <ProcessSteps />

      <button class="next">&#10095;</button>
    </div>
  );
}

export default Process;
