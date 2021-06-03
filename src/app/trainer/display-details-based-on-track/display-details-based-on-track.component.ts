import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-display-details-based-on-track',
  templateUrl: './display-details-based-on-track.component.html',
  styleUrls: ['./display-details-based-on-track.component.css']
})
export class DisplayDetailsBasedOnTrackComponent implements OnInit {

  constructor(private service:UserService,private _router: ActivatedRoute) { }
  trainerList = [] as any;

  ngOnInit(): void {
    console.warn(this._router.snapshot.params.name);
    
    this.service.getTrackTrainersDetails(this._router.snapshot.params.name).subscribe(data => { this.trainerList = data });
  }

}
