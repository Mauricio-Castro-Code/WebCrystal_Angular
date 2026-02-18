import { Component } from '@angular/core';

import { MissionComponent } from './components/mission/mission.component';
import { TeamComponent } from './components/team/team.component';
import { VisionComponent } from './components/vision/vision.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [MissionComponent, VisionComponent, TeamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
