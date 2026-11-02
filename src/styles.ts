import styled from "@emotion/styled";

export const Page = styled.main`
  width: min(1080px, 100%);
  margin: 0 auto;
  padding: 56px 32px 72px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 34px 18px 48px;
  }
`;

export const Header = styled.header`
  margin-bottom: 38px;
  text-align: left;

  @media (max-width: 600px) {
    margin-bottom: 28px;
  }
`;

export const Eyebrow = styled.p`
  margin: 0 0 10px;
  color: #6254d9;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.8px;
`;

export const MainTitle = styled.h1`
  margin: 0;
  color: #202435;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 750;
  line-height: 1.1;
  letter-spacing: -1.8px;
`;

export const Subtitle = styled.p`
  margin-top: 14px;
  color: #777f91;
  max-width: 620px;
  font-size: 1rem;
`;

export const Manager = styled.section`
  text-align: left;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 34px;

  @media (max-width: 600px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 460px;

  @media (max-width: 600px) {
    max-width: none;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-55%);
  font-size: 25px;
  color: #777f91;
  pointer-events: none;
`;

export const TextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e5e7ef;
  border-radius: 10px;
  padding: 12px 14px;
  background: #fff;
  color: #303548;
  font: inherit;
  font-size: 14px;
  outline: none;
  transition:
    border-color 150ms ease,
    box-shadow 150ms ease;

  &:focus {
    border-color: #6254d9;
    box-shadow: 0 0 0 3px #eeecff;
  }
`;

export const SearchInput = styled(TextInput)`
  padding-left: 46px;
  min-height: 48px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 0;
  border-radius: 10px;
  padding: 12px 18px;
  min-height: 46px;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 150ms ease,
    background 150ms ease;

  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background: #6254d9;
  &:hover:not(:disabled) {
    background: #5144c4;
  }
`;

export const SecondaryButton = styled(Button)`
  color: #303548;
  background: #f0f1f6;
  &:hover:not(:disabled) {
    background: #e5e7ef;
  }
`;

export const NewTaskButton = styled(PrimaryButton)`
  white-space: nowrap;
  span {
    font-size: 20px;
    line-height: 1;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  margin: 0 0 20px;
  padding: 13px 16px;
  border: 1px solid #f0b8c1;
  border-radius: 10px;
  color: #9e263b;
  background: #fff0f2;
  font-size: 14px;
`;

export const Section = styled.section`
  margin-top: 4px;
`;

export const TasksHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  h2 {
    margin: 0;
    color: #202435;
    font-size: 21px;
    font-weight: 750;
  }
`;

export const Counter = styled.p`
  display: block;
  margin-top: 6px;
  color: #777f91;
  font-size: 13px;
`;

export const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 275px), 1fr));
  gap: 18px;
`;

export const TaskCard = styled.article`
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid #e5e7ef;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 5px 20px rgb(0 0 0 / 3%);
  transition:
    transform 160ms ease,
    box-shadow 160ms ease,
    border-color 160ms ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #d0cbff;
    box-shadow: 0 10px 28px rgb(0 0 0 / 6%);
  }

  h3 {
    margin: 0 0 9px;
    color: #202435;
    font-size: 18px;
    line-height: 1.35;
    overflow-wrap: anywhere;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 18px;
`;

export const TaskLabel = styled.span`
  color: #6254d9;
  background: #eeecff;
  padding: 5px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const DeleteButton = styled.button`
  padding: 6px 8px;
  border: 0;
  border-radius: 7px;
  color: #c43c52;
  background: transparent;
  font: inherit;
  font-size: 12px;
  font-weight: 650;
  cursor: pointer;
  &:hover {
    background: #fff0f2;
  }
  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

export const Description = styled.p`
  color: #777f91;
  font-size: 14px;
  line-height: 1.6;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  min-height: 44px;
`;

export const Responsible = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #e5e7ef;
  margin-top: 22px;
  padding-top: 16px;
`;

export const Avatar = styled.span`
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: #6254d9;
  background: #eeecff;
  font-size: 14px;
  font-weight: 800;
`;

export const ResponsibleDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  strong {
    color: #202435;
    font-size: 13px;
  }
`;

export const MutedCaption = styled.span`
  color: #777f91;
  font-size: 11px;
`;

export const EmptyState = styled.div`
  padding: 54px 20px;
  border: 1px dashed #e5e7ef;
  border-radius: 16px;
  text-align: center;
  background: #fff;
  h3 {
    margin: 10px 0 7px;
    color: #202435;
    font-size: 17px;
  }
  p {
    color: #777f91;
    font-size: 14px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgb(15 18 30 / 58%);
  backdrop-filter: blur(4px);
  overflow-y: auto;
`;

export const Modal = styled.section`
  width: min(100%, 510px);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  border: 1px solid #e5e7ef;
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 24px 80px rgb(0 0 0 / 25%);
  animation: modal-enter 160ms ease-out;

  @keyframes modal-enter {
    from {
      opacity: 0;
      transform: translateY(8px) scale(0.99);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export const TaskFormElement = styled.form`
  padding: 28px;
  @media (max-width: 600px) {
    padding: 22px;
  }
  label {
    display: block;
    margin: 16px 0 7px;
    color: #202435;
    font-size: 13px;
    font-weight: 700;
  }
  label span:not(.optional) {
    color: #c43c52;
  }
  input,
  textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #e5e7ef;
    border-radius: 10px;
    padding: 12px 14px;
    background: #fff;
    color: #303548;
    font: inherit;
    font-size: 14px;
    outline: none;
    transition:
      border-color 150ms ease,
      box-shadow 150ms ease;
    &:focus {
      border-color: #6254d9;
      box-shadow: 0 0 0 3px #eeecff;
    }
  }
  textarea {
    resize: vertical;
    min-height: 92px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  h2 {
    margin: 0;
    color: #202435;
    font-size: 25px;
    font-weight: 750;
  }
  p {
    margin-bottom: 5px;
  }
`;

export const IconButton = styled.button`
  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 8px;
  background: #f0f1f6;
  color: #303548;
  font-size: 25px;
  line-height: 1;
  cursor: pointer;
`;

export const FormHint = styled.p`
  margin-top: 12px;
  color: #777f91;
  font-size: 11px;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 22px;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    button {
      width: 100%;
    }
  }
`;

export const StatusMessage = styled.p`
  padding: 54px 20px;
  text-align: center;
  color: #777f91;
`;

export const VisuallyHidden = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const OptionalText = styled.span`
  color: #777f91;
  font-weight: 400;
`;
