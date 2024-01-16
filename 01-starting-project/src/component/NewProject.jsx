import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
          ) {
            modal.current.open();
            return;
          }
          

        onAdd(
            {
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }
    

    return <> 
    <Modal ref={modal} buttonCaption = "Okay">
        <h2 className="text-xl font-bold text-stone-500 mt-4 my-4" >Invalid Input</h2>
        <p className='text-stone-400 mb-4  '>Oops... looks like no input added</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick = {onCancel} className="text-stone-800 hover: text-stone-950">Cancel</button></li>
            <li><button onClick = {handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md ">Save</button></li>
        </menu>
        <div>
            <Input type = "text" ref= {title} label = "Title" />
            <Input ref= {description} label = "Description" textarea/>
            <Input type = "date" ref= {dueDate} label = "Due date" />
        </div>
    </div>
    </>
}