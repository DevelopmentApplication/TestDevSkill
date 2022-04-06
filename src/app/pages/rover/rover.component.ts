import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from 'src/app/components/spinner/spinner.service';
import { IPhotos, IRover } from 'src/app/models/rover.model';
import { RoverService } from 'src/app/services/rover.service';

/**Data en duro que utilizaba cuando la api no estaba disponible */
const ELEMENT_DATA: any[] = [
    {
        "id": 5,
        "name": "Curiosity",
        "landing_date": "2012-08-06",
        "launch_date": "2011-11-26",
        "status": "active",
        "max_sol": 3435,
        "max_date": "2022-04-05",
        "total_photos": 559409,
        "cameras": [
            {
                "id": 20,
                "name": "FHAZ",
                "rover_id": 5,
                "full_name": "Front Hazard Avoidance Camera"
            },
            {
                "id": 26,
                "name": "NAVCAM",
                "rover_id": 5,
                "full_name": "Navigation Camera"
            },
            {
                "id": 22,
                "name": "MAST",
                "rover_id": 5,
                "full_name": "Mast Camera"
            },
            {
                "id": 23,
                "name": "CHEMCAM",
                "rover_id": 5,
                "full_name": "Chemistry and Camera Complex"
            },
            {
                "id": 24,
                "name": "MAHLI",
                "rover_id": 5,
                "full_name": "Mars Hand Lens Imager"
            },
            {
                "id": 25,
                "name": "MARDI",
                "rover_id": 5,
                "full_name": "Mars Descent Imager"
            },
            {
                "id": 21,
                "name": "RHAZ",
                "rover_id": 5,
                "full_name": "Rear Hazard Avoidance Camera"
            }
        ]
    },
    {
        "id": 7,
        "name": "Spirit",
        "landing_date": "2004-01-04",
        "launch_date": "2003-06-10",
        "status": "complete",
        "max_sol": 2208,
        "max_date": "2010-03-21",
        "total_photos": 124550,
        "cameras": [
            {
                "id": 27,
                "name": "FHAZ",
                "rover_id": 7,
                "full_name": "Front Hazard Avoidance Camera"
            },
            {
                "id": 29,
                "name": "NAVCAM",
                "rover_id": 7,
                "full_name": "Navigation Camera"
            },
            {
                "id": 30,
                "name": "PANCAM",
                "rover_id": 7,
                "full_name": "Panoramic Camera"
            },
            {
                "id": 31,
                "name": "MINITES",
                "rover_id": 7,
                "full_name": "Miniature Thermal Emission Spectrometer (Mini-TES)"
            },
            {
                "id": 32,
                "name": "ENTRY",
                "rover_id": 7,
                "full_name": "Entry, Descent, and Landing Camera"
            },
            {
                "id": 28,
                "name": "RHAZ",
                "rover_id": 7,
                "full_name": "Rear Hazard Avoidance Camera"
            }
        ]
    },
    {
        "id": 6,
        "name": "Opportunity",
        "landing_date": "2004-01-25",
        "launch_date": "2003-07-07",
        "status": "complete",
        "max_sol": 5111,
        "max_date": "2018-06-11",
        "total_photos": 198439,
        "cameras": [
            {
                "id": 14,
                "name": "FHAZ",
                "rover_id": 6,
                "full_name": "Front Hazard Avoidance Camera"
            },
            {
                "id": 16,
                "name": "NAVCAM",
                "rover_id": 6,
                "full_name": "Navigation Camera"
            },
            {
                "id": 17,
                "name": "PANCAM",
                "rover_id": 6,
                "full_name": "Panoramic Camera"
            },
            {
                "id": 18,
                "name": "MINITES",
                "rover_id": 6,
                "full_name": "Miniature Thermal Emission Spectrometer (Mini-TES)"
            },
            {
                "id": 19,
                "name": "ENTRY",
                "rover_id": 6,
                "full_name": "Entry, Descent, and Landing Camera"
            },
            {
                "id": 15,
                "name": "RHAZ",
                "rover_id": 6,
                "full_name": "Rear Hazard Avoidance Camera"
            }
        ]
    },
    {
        "id": 8,
        "name": "Perseverance",
        "landing_date": "2021-02-18",
        "launch_date": "2020-07-30",
        "status": "active",
        "max_sol": 400,
        "max_date": "2022-04-04",
        "total_photos": 63505,
        "cameras": [
            {
                "id": 33,
                "name": "EDL_RUCAM",
                "rover_id": 8,
                "full_name": "Rover Up-Look Camera"
            },
            {
                "id": 35,
                "name": "EDL_DDCAM",
                "rover_id": 8,
                "full_name": "Descent Stage Down-Look Camera"
            },
            {
                "id": 36,
                "name": "EDL_PUCAM1",
                "rover_id": 8,
                "full_name": "Parachute Up-Look Camera A"
            },
            {
                "id": 37,
                "name": "EDL_PUCAM2",
                "rover_id": 8,
                "full_name": "Parachute Up-Look Camera B"
            },
            {
                "id": 38,
                "name": "NAVCAM_LEFT",
                "rover_id": 8,
                "full_name": "Navigation Camera - Left"
            },
            {
                "id": 39,
                "name": "NAVCAM_RIGHT",
                "rover_id": 8,
                "full_name": "Navigation Camera - Right"
            },
            {
                "id": 40,
                "name": "MCZ_RIGHT",
                "rover_id": 8,
                "full_name": "Mast Camera Zoom - Right"
            },
            {
                "id": 41,
                "name": "MCZ_LEFT",
                "rover_id": 8,
                "full_name": "Mast Camera Zoom - Left"
            },
            {
                "id": 42,
                "name": "FRONT_HAZCAM_LEFT_A",
                "rover_id": 8,
                "full_name": "Front Hazard Avoidance Camera - Left"
            },
            {
                "id": 43,
                "name": "FRONT_HAZCAM_RIGHT_A",
                "rover_id": 8,
                "full_name": "Front Hazard Avoidance Camera - Right"
            },
            {
                "id": 44,
                "name": "REAR_HAZCAM_LEFT",
                "rover_id": 8,
                "full_name": "Rear Hazard Avoidance Camera - Left"
            },
            {
                "id": 45,
                "name": "REAR_HAZCAM_RIGHT",
                "rover_id": 8,
                "full_name": "Rear Hazard Avoidance Camera - Right"
            },
            {
                "id": 34,
                "name": "EDL_RDCAM",
                "rover_id": 8,
                "full_name": "Rover Down-Look Camera"
            },
            {
                "id": 46,
                "name": "SKYCAM",
                "rover_id": 8,
                "full_name": "MEDA Skycam"
            },
            {
                "id": 47,
                "name": "SHERLOC_WATSON",
                "rover_id": 8,
                "full_name": "SHERLOC WATSON Camera"
            },
            {
                "id": 48,
                "name": "SUPERCAM_RMI",
                "rover_id": 8,
                "full_name": "SuperCam Remote Micro Imager"
            },
            {
                "id": 49,
                "name": "LCAM",
                "rover_id": 8,
                "full_name": "Lander Vision System Camera"
            }
        ]
    }
]

const ELEMENT_DATA2: any[] = [
    {
        "id": 102685,
        "sol": 1004,
        "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    {
        "id": 102686,
        "sol": 1004,
        "camera": {
            "id": 20,
            "name": "FHAZ",
            "rover_id": 5,
            "full_name": "Front Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    {
        "id": 102842,
        "sol": 1004,
        "camera": {
            "id": 21,
            "name": "RHAZ",
            "rover_id": 5,
            "full_name": "Rear Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    },
    {
        "id": 102843,
        "sol": 1004,
        "camera": {
            "id": 21,
            "name": "RHAZ",
            "rover_id": 5,
            "full_name": "Rear Hazard Avoidance Camera"
        },
        "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG",
        "earth_date": "2015-06-03",
        "rover": {
            "id": 5,
            "name": "Curiosity",
            "landing_date": "2012-08-06",
            "launch_date": "2011-11-26",
            "status": "active"
        }
    }
]

@Component({
    selector: 'app-Rover',
    templateUrl: './Rover.component.html',
    styleUrls: ['./Rover.component.css']
})
export class RoverComponent implements OnInit {

    public roverForm: FormGroup;
    public rovers: IRover[] = [];
    public photos: IPhotos[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private roverService: RoverService,
        private spinnerService: SpinnerService,
        private snackBar: MatSnackBar
    ) {
        this.rovers = this.route.snapshot.data.rover.rovers;
        this.roverForm = this.formBuilder.group({
            nameControl: [Validators.required],
            dateControl: [Validators.required],
        });
    }

    ngOnInit(): void {
    }

    onSubmit() {
        this.loadPhotos();
    }

    public async loadPhotos() {
        this.photos = [];
        this.spinnerService.open();
        this.roverService.getPhotos(this.roverForm.value).toPromise()
            .finally(() => this.spinnerService.close())
            .then(data => this.handleSuccess(data))
            .catch((error) => this.handleError(error));
    }

    private handleSuccess(data: any) {
        data['photos'].length ? this.photos = data['photos'] : this.snackBar.open('There are no photos for the selected date. Please select another date', 'important')
    }

    private async handleError(error:any) {
        console.log(error);
        this.snackBar.open('an error occurred', 'error');
    }

    public resetForm() {
        this.roverForm.reset();
        this.photos = [];
    }

    get f() { return this.roverForm.controls; }

}
