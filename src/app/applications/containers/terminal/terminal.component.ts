import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { TerminalCommand } from 'src/app/shared/config/terminal-command';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
  providers: [TerminalService]
})
export class TerminalComponent implements OnInit {

  command: string = '';

  constructor(private terminalService: TerminalService) {
    this.terminalService.commandHandler.subscribe((command) => {
      const response = this.getCommandResponse(command);
      this.terminalService.sendResponse(response);
    });
  }

  ngOnInit(): void {
  }

  private getCommandResponse(command: string) {
    switch (command.toUpperCase()) {
      case TerminalCommand.Author: return 'Jonathan Torres';
      case TerminalCommand.Ui: return 'PrimeNG';
      case TerminalCommand.Framework: return 'Angular';
      case TerminalCommand.Exit: return this.command = "exit";
      default: return 'Unknown command';
    }
  }

}
