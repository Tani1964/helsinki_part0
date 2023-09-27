
    const dialog = document.getElementById('dialog')


    const open = (e) =>{
        dialog.showModal()
    }

    const close = () =>{
        dialog.close()
    }

function Form() {
    // open.addEventListener('click', ()=>{
    //     dialog.showModal()
    // })

    // close.addEventListener('click', ()=>{
    //     dialog.close()
    // })

    // submit.addEventListener('click', ()=>{
    //     dialog.close()
    // })

  return (
    <div>
      <form action="/" method="post">
        <div>
          <label for="task">Enter your task:</label>
          <input id="task" type="text" name="task" required />
        </div>
        <div>
          <input type="reset" />
          <input onClick={open} type="button" name="submit" value="Submit" />
        </div>
        <dialog id="dialog">
          <div >
            <h1>Are you sure?</h1>
            <input onClick={close} type="button" name="submit" value="NO" />
            <input onClick={close} type="Submit" name="submit" value="Yes" />
          </div>
        </dialog>
      </form>
    </div>
  );
}

export default Form;
