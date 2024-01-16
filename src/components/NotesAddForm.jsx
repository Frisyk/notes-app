import React from 'react';
 
class NotesAddForm extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
          title: '',
          body: '',
          character: 50,
        }
      
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
      }
      
      onTitleChangeEventHandler(event) {
        this.setState((prevState) => {
          const title = event.target.value;
          const characterChange = prevState.title.length - title.length;
          const remainingCharacters = prevState.character + characterChange;
      
          return {
            title: title,
            character: remainingCharacters,
          };
        });
      }
      
      
      onBodyChangeEventHandler(event) {
        this.setState(() => {
          return {
            body: event.target.value,
          }
        });
      }
      
      onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        if(this.state.body.length != 0 && this.state.title.length != 0) {
            this.setState(() => {
                return {
                    title: "",
                    body: "",
                }
            })
        }
      }
      render() {
        return (
          <form className='note-input' onSubmit={this.onSubmitEventHandler}>
                      <h2>Tambahkan Catatan</h2>
            <p className="note-input__title__char-limit">Tersisa {this.state.character} Karakter</p>
            <input className="note-input__title" type="text" placeholder="Judul" maxLength={50} value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <textarea className="note-input__body" type="text" placeholder="Tulis Catatanmu disini ..." value={this.state.body} onChange={this.onBodyChangeEventHandler} />
            <button type="submit">Tambahkan Note</button>
          </form>
        )
      }
}
 
export default NotesAddForm;